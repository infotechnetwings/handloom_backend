const Category = require("../models/Category");

exports.create = (req, res) => {
  const category = new Category(req.body);
  category.save((err, category) => {
    if (err) {
      res.status(400).json({
        error: "category not created",
      });
    }
    res.json({ category });
  });
};
