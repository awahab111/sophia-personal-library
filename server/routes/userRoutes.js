// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {User, Book} = require('../models/Models');


// Routes
//signup route
router.post('/signup', async(req, res) => {
    try {
      const {fullname, email, password} = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const user = new User({fullname, email, password});
      await user.save();
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

//login route

router.post('/login', async(req, res) => {
    try {
      const {email, password} = req.body;
      const user = await User.findOne
        ({ email });
        console.log(user);
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
