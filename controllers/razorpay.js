const Razorpay = require("razorpay");

exports.payment = (req, res) => {
  console.log(req.body);
  const instance = new Razorpay({
    key_id: "rzp_test_DFIt4Gbc8aM1KR",
    key_secret: "dkRuOVgns9CUZAoCgkIrJvCa",
  });

  const options = {
    amount: req.body.amount * 100, // amount in the smallest currency unit
    currency: "INR",
  };
  instance.orders.create(options, (err, order) => {
    console.log(order);
    res.json({ order });
  });
};
