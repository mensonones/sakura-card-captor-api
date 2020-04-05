const mongoose = require("mongoose");

const CardSchema = mongoose.Schema(
  {
    name: String,
    urlImage: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", CardSchema);
