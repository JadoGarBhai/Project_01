const express = require("express");
const router = express.Router();
const User = require("../models/userAuthModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// Register

router.post("/register", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (email || !password || !confirmPassword) {
    req.statusCode(422).json({ error: "fill all the details" });
  }

  try {
    const preUser = await User.findOne({ email: email });

    if (preUser) {
      req.statusCode(422).json({ error: "Email already exists." });
    } else {
      const finalUser = new User({
        email,
        password,
        confirmPassword,
      });

      const stoteData = await finalUser.save();
    }
  } catch (error) {
    req.statusCode(422).json(error);
  }
});

module.exports = router;
