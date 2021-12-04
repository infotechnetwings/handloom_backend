const Order = require("../models/order");

exports.create = (req, res) => {
  const orderData = {
    transaction_id: req.body.order.transaction_id,
    amount: req.body.order.amount,
    product: req.body.product,
    user: req.body.order.user,
  };
  console.log(orderData);
  const order = new Order(orderData);
  order.save((err, order) => {
    if (err) {
      res.status(400).json({
        error: "order not processed something went wrong",
      });
    }
    res.json(order);
  });
};

exports.orderById = (req, res) => {
  Order.find().exec((err, order) => {
    if (err || !product) {
      res.status(400).json({ message: "product not found" });
    }
    res.json(order);
  });
};

exports.getOrder = (req, res) => {
  Order.find({ user: req.profile._id }, (err, order) => {
    if (err) {
      res.status(400).json({ message: "envalid request" });
    }
    res.status(200).json(order);
  });
};
