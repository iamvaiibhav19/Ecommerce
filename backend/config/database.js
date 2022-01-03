//connecting to database
const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) =>
      console.log(
        `MongoDB connected successfully with server ${data.connection.host}`
      )
    );
};

module.exports = connectToDB;
