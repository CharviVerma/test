const mongoose = require("mongoose");

const UrlResponseSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    responseTime: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UrlResponse", UrlResponseSchema);
