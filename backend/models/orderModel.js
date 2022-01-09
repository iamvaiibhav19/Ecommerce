const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: [true, "Please add shipping address"],
    },
    city: {
      type: String,
      required: [true, "Please add shipping city"],
    },
    state: {
      type: String,
      required: [true, "Please add shipping state"],
    },
    country: {
      type: String,
      default: "India",
      required: [true, "Please add shipping country"],
    },
    pinCode: {
      type: Number,
      required: [true, "Please add shipping pin code"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Please add shipping phone number"],
    },
  },
  orderItems: [
    {
      name: {
        type: String,
        required: [true, "Please add product name"],
      },
      price: {
        type: Number,
        required: [true, "Please add product price"],
      },
      quantity: {
        type: Number,
        required: [true, "Please add product quantity"],
      },
      image: {
        type: String,
        required: [true, "Please add product image"],
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  paymentInfo: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  paidAt: {
    type: Date,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "processing",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
