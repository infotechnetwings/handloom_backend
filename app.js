const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const cors = require("cors");
require("dotenv").config();

//import routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");
const paymentRoute = require("./routes/razorpay");
const orderRoute = require("./routes/order");

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(expressValidator());
app.use(cors());

//routes middleware
app.use(authRoute);
app.use(categoryRoute);
app.use(productRoute);
app.use(userRoute);
app.use(paymentRoute);
app.use(orderRoute);

//db connection
mongoose.connect(process.env.DATABASE).then(() => {
  console.log("DB Connection established");
});

//port
const port = process.env.PORT || 8000;

//listner
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
