// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  // profile_pic:Image
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: Date,
  // cover: Image
});


const User = mongoose.model('User', userSchema);  

module.exports = User;
