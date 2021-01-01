const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
    default: "personal",
  },
  type: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", ProductSchema);
