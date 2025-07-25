const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  bio: String,
  styles: [String],
});

module.exports = mongoose.model("User", userSchema);
