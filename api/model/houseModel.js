/* 
  authorName : Sanjuna Konda 
  email : sn493898@dal.ca
*/

const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    rooms: { type: String, required: true },
    bathrooms: { type: String, required: true },
    category: { type: String, required: true },
    peoplecount: { type: String, required: true },
    price: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  
  });
  
  module.exports = mongoose.model("House", houseSchema);