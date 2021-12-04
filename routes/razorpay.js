const express = require("express");
const { payment } = require("../controllers/razorpay");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById, getUser } = require("../controllers/user");

router.post("/razorpay", requireSignin, payment);
router.param("userId", userById);
module.exports = router;
