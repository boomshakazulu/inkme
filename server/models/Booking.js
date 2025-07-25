const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  artistId: String,
  name: String,
  email: String,
  date: Date,
  bodyArea: String,
  description: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
