const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const replySchema = new mongoose.Schema({
  description: { type: String, required: true },
  date: { type: String, default: () => new Date() },
  status: { type: Boolean, default: () => true },

  //   _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("reply", replySchema);
