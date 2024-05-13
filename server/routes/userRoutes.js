// server/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { User, Book } = require("../models/Models");

// Routes
//signup route
router.post("/signup", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      fullname,
      email,
      password,
      profile_pic: "",
      books: [],
    });
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//login route

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//get user books
//:email is actually portion before @
//!!PROBLEM: users cannot create account with same email prefix however, it can be done with different email providers
//will solve later
router.get("/user/:email/books", async (req, res) => {
  try {
    const emailPrefix = req.params.email;
    const regex = new RegExp(`^${emailPrefix}`, "i");
    const user = await User.findOne({ email: regex }).populate("books");
    res.json(user.books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get book by id
router.get("/book", async (req, res) => {
  try {
    const book = await Book.findOne({ id: req.query.id }).exec();
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//upload book, we also need a user here to associate the book with
router.post("/upload/book", async (req, res) => {
  try {
    let {user, book} = req.body;
    const lastBook = await Book.find().sort({ id: -1 }).limit(1);
    book.id = lastBook[0].id + 1;
    book = new Book(book);
    await book.save();
    user.books.push(book);
    await user.save();
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

//delete book by id
router.delete("/book/delete", async (req, res) => {
  try {
    const book = await Book.findOneAndDelete
    ({ id: req.query.id });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//edit profile
router.put("/user/edit/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.password = req.body.password;
    user.profile_pic = req.body.profile_pic;
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//delete profile
router.delete("/user/delete/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne
    ({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.remove();
    res.json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}
);

module.exports = router;
