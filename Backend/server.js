const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UrlInterval = require('./models/UrlInterval');
const UrlResponse = require('./models/UrlResponse');
const User = require('./models/User')
const startCronJob = require('./cron');
const dotenv = require('dotenv');

require('dotenv').config({path:'./config/config.env'});
const app = express()

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}


async function makeRequest() {
  try {
    const response = await fetch('https://randomuser.me/api/');

    console.log('response.status: ', response.status); // 👉️ 200
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

makeRequest();
app.use(allowCrossDomain);

const port = process.env.port;
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});
// db.createCollection('users', function(err, collection) {});

app.post('/register', async (req, res) => {
  try {
    // hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // create new user
    const newUser = new User({
      username: req.body.usernme,
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

app.post('/login', async (req, res) => {
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
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ accessToken: accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error authenticating user' });
  }
});

app.post('/url-interval', async (req, res) => {
  try {
    const { url, timeInterval } = req.body;
    const urlInterval = new UrlInterval({ url, timeInterval });
    await urlInterval.save();
    startCronJob(urlInterval);
    res.status(201).json(urlInterval);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/url-responses', async (req, res) => {
  try {
    const urlResponses = await UrlResponse.find().sort({ createdAt: -1 }).limit(20);
    res.json(urlResponses);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/url-responses/all', async (req, res) => {
  try {
    const urlResponses = await UrlResponse.find();
    res.json(urlResponses);
  } catch (error) {
    console.error(error);
    res.sendStatus(200);
  }
});

app.get('/url-entries', async (req, res) => {
  try {
    const urlIntervals = await UrlInterval.find();
    res.json(urlIntervals);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.listen(process.env.PORT,()=>{
  console.log(`server started on PORT:${process.env.PORT} in ${process.env.NODE_ENV} node.`)
})

