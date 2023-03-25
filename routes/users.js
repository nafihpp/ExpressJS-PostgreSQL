const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/usersController");
const authMiddleware = require("../middlewares/authMiddleware");

// router.route("/signup").post(signup);
// router.route("/login").post(login);
// router.route("/profile").get(authMiddleware);
// router.route("/admin/users").get(isLoggedIn, customRole("admin"), adminAllUser);

module.exports = router;
