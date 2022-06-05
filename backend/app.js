const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

var cors = require("cors");

const app = express();

const errorMiddleware = require("./middlewares/error");

dotenv.config({
  path: "backend/config/config.env",
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//route imports
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");
const defaultRoute = require("./routes/defaultRoute");
const payment = require("./routes/paymentRoute");

app.use("/", defaultRoute);
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
