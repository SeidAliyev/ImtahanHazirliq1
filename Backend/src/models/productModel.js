const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    null:false,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    null:false
  },
  image: {
    type: String
  },
});

module.exports = mongoose.model("Product", productSchema);