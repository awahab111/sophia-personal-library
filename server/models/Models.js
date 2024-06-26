// server/models/User.js
const mongoose = require('mongoose');

//for now im keeping all the models in one file because it makes the import/export process easier
//if it gets cluttered i will seperate them

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  profile_pic:String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

const bookSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  pages: Number,
  published: Date,
  genre: String,
  edition: String,
  description: String,
  about_author: String,
  cover: String,
  path: String
});


const User = mongoose.model('User', userSchema); 
const Book = mongoose.model('Book', bookSchema); 

module.exports = { User, Book };