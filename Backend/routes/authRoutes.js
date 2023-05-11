const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User')

router.post('/register', async (req, res) => {
    try {
      // hash password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // create new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      // save user to database
      const savedUser = await newUser.save();
      res.json({ message: 'User created', user: savedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user' });
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
      // find user by email
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.redirect('/signup');
      }
      // check if password is correct
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      // generate access token
      const accessToken = jwt.sign({ userId: user._id.toHexString() },`${process.env.JWT_SECRET_KEY}`);
      res.json({ accessToken: accessToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error authenticating user' });
    }
  });

module.exports = router;
