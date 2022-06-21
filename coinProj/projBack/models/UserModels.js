const mongoose = require("mongoose");

// create an schema
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

var userModel = mongoose.model("users", userSchema);

module.exports = mongoose.model("Users", userModel);
