const User = require("../models/User");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "user not found" });
    }
    req.profile = user;
    next();
  });
};

///get user
exports.getUser = (req, res) => {
  res.status(400).json({ user: req.profile });
};
