// server/server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const seed = require('./routes/seed');

const app = express();
const PORT = process.env.PORT || 7000;
console.log(process.env.MONGODB_URI); 
// Middleware
app.use(express.json());
app.use(cors());

//seed the database
app.use(seed);

// Use routes
app.use(userRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});