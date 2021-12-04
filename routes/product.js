const express = require("express");
const {
  create,
  getProduct,
  productById,
  deleteProduct,
  getPhoto,
  getallProduct,
} = require("../controllers/product");

const router = express.Router();

router.post("/product/create", create);
router.get("/product/:productId", getProduct);
router.get("/product", getallProduct);
router.param("productId", productById);
router.delete("/product/:productId/:userId", deleteProduct);
router.get("/product/photo/:productId", getPhoto);

module.exports = router;
