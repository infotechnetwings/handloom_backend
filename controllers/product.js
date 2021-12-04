const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Product = require("../models/Product");
const { errorHandler } = require("../helpers/dbErrorHander");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "image could not be uploaded",
      });
    }
    let product = new Product(fields);
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "image could not be uploaded. It should be less than 1 mb",
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "product could not be saved successfully",
        });
      }

      res.json(product);
    });
  });
};

//get product

exports.getProduct = (req, res) => {
  req.product.photo = undefined;
  res.status(400).json({ product: req.product });
};

//get all product
exports.getallProduct = (req, res) => {
  Product.find((p) => {
    res.status(400).json({
      products: p,
    });
  });
  // res.status(400).json("all");
};

//find product
exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      res.status(400).json({ message: "product not found" });
    }
    req.product = product;
    next();
  });
};

//delete product

exports.deleteProduct = (req, res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if (err) {
      error: errorHandler(err);
    }
    deletedProduct.photo = undefined;
    res.json({ deletedProduct, message: "product deleted" });
  });
};

exports.getPhoto = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
};
