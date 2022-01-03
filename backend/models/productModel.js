const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please add product description"],
  },
  price: {
    type: Number,
    required: [true, "Please add product price"],
    maxlength: [8, "Price cannot exceed 8 digits"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please add product category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please add product stock"],
    maxlength: [4, "Stock cannot exceed 4 digits"],
  },
  numberOfReviews: {
    type: String,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Products", productSchema);
