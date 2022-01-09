const express = require("express");
const {
  createOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");

const router = express.Router();

const { isAuthenticatedUser, authorisedRoles } = require("../middlewares/auth");

router.route("/order/new").post(isAuthenticatedUser, createOrder);

router
  .route("/order/:id")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorisedRoles("admin"), updateOrderStatus)
  .delete(isAuthenticatedUser, authorisedRoles("admin"), deleteOrder);

module.exports = router;
