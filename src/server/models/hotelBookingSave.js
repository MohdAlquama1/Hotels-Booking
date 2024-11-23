// models/HotelBooking.js
const mongoose = require('mongoose');

const hotelBookingSchema = new mongoose.Schema({
  //user
  LoginUSerId :String,
  LoginFirstName:String,
  loginLastName:String,
  LoginEmail:String,
  //hotel
  hotelName :String ,
  hotelType: String,
  hotelCity: String,
  hotelPrice: Number,
  hotelNum : Number,
  //user stay detail
  fullName: String,
  nights: Number,
  age: Number,
  gender: String,
  aadhaarNo: String,
  startDate: Date,
  endDate: Date,
  Status:String
});

const HotelBooking = mongoose.model('HotelBooking', hotelBookingSchema);

module.exports = HotelBooking;
