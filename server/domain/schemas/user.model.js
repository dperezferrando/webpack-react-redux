const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user:  String,
  password: String,
  name:   String,
});

module.exports = mongoose.model('User', userSchema);