const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({
  hotelName: String,
  hotelType: String,
  hotelPrice: Number,
  coverDesc: String,
  longDesc: String,
  city: String,
  hotelNum: Number,
  coverPic: String,
  roomPic: String,
  viewPic: String,
  bathroomPic: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
