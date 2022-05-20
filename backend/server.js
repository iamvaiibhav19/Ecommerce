const app = require("./app");

const dotenv = require("dotenv");

const cloudinary = require("cloudinary");

const connectToDB = require("./config/database");

//uncaught exception handler
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

//config

dotenv.config({
  path: "config/.env",
});

//connecting to database

connectToDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION", err.message);
  console.log("Shutting down the Server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
