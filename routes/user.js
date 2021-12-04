const express = require("express");
const { userById, getUser } = require("../controllers/user");
const router = express.Router();
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

router.get("/user/:userId", requireSignin, isAuth, getUser);
router.param("userId", userById);

module.exports = router;
