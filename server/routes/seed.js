const express = require('express');
const router = express.Router();
const { User, Book } = require('../models/Models.js');

router.get('/seed', async (req, res) => {
  // Create a new book
  const book1 = new Book({
    id: 1,
    title: 'Book Title 1',
    author: 'Author 1',
    pages: 200,
    published: new Date(),
    genre: 'Fiction',
    edition: 'First',
    description: 'This is a description of the book.',
    about_author: 'This is about the author.',
    cover: 'cover.jpg'
  });

  const book2 = new Book({
    id: 2,
    title: 'Book Title 2',
    author: 'Author 2',
    pages: 300,
    published: new Date(),
    genre: 'Non-Fiction',
    edition: 'First',
    description: 'This is a description of the book.',
    about_author: 'This is about the author.',
    cover: 'cover2.jpg'
  });

  // Save the books to the database
  const savedBook1 = await book1.save();
  const savedBook2 = await book2.save();

  // Create a new user
  const user = new User({
    fullname: 'John Doe',
    email: 'john@example.com',
    password: 'password',
    profile_pic: 'profile.jpg',
    books: [savedBook1._id, savedBook2._id] // Add the books to the user
  });

  // Save the user to the database
  const savedUser = await user.save();

  res.send(`Seeded the database with user: ${savedUser.fullname} and books: ${savedBook1.title}, ${savedBook2.title}`);
});

module.exports = router;