const express = require("express");
const cookieParser = require("cookie-parser");

var cors = require("cors");

const app = express();

const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//route imports
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");
const defaultRoute = require("./routes/defaultRoute");

app.use("/", defaultRoute);
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
