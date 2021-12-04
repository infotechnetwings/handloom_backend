const express = require("express");
const { userById, getUser } = require("../controllers/user");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { create, getOrder } = require("../controllers/order");

router.post("/order/create/:userId", requireSignin, isAuth, create);
router.get("/order/get/:userId", requireSignin, isAuth, getOrder);
router.param("userId", userById);

module.exports = router;
