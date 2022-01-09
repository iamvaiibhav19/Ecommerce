const Order = require("../models/orderModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

//create order
exports.createOrder = catchAsyncErrors(async (req, res, next) => {
  console.log(Order);
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

//getOrderDetails
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) return next(new ErrorHandler("Order not found", 404));
  res.status(200).json({
    success: true,
    order,
  });
});

//get logged in user orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  if (!orders) return next(new ErrorHandler("Order not found", 404));
  res.status(200).json({
    success: true,
    orders,
  });
});

//get all orders - ADMIN
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  if (!orders) return next(new ErrorHandler("Order not found", 404));
  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

//update order status - ADMIN
exports.updateOrderStatus = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) return next(new ErrorHandler("Order not found", 404));

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("Order already delivered", 400));
  }

  order.orderItems.forEach(async (item) => {
    await updateStock(item.product, item.quantity);
  });

  order.orderStatus = req.body.status;
  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

//delete order
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) return next(new ErrorHandler("Order not found", 404));

  await order.remove();
  res.status(200).json({
    success: true,
    message: "Order deleted successfully",
  });
});
