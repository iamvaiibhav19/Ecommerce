const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateUserProfile,
  getAllUsers,
  getUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorisedRoles } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/logout").get(logoutUser);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateUserProfile);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getUser)
  .put(isAuthenticatedUser, authorisedRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorisedRoles("admin"), deleteUser);
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getAllUsers);

module.exports = router;
