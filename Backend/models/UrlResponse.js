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
    url_interval_id: {
      type: Schema.Types.ObjectId,
      ref: 'UrlInterval',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UrlResponse", UrlResponseSchema);
