const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());

//route imports
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
