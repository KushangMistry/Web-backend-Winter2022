/* 
  authorName : Vishvesh Naik 
  email : vishvesh@dal.ca
*/

const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const threadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, default: () => new Date() },
  description: { type: String, required: true },
  status: { type: Boolean, default: () => true },
  name: { type: String, required: true },

  //   _id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("thread", threadSchema);
