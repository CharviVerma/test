const mongoose = require('mongoose');

const urlIntervalSchema = new mongoose.Schema(
    {
  url: {
    type: String,
    required: true,
  },
  timeInterval: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UrlInterval = mongoose.model('UrlInterval', urlIntervalSchema);