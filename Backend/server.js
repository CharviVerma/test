const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UrlInterval = require('./models/UrlInterval');
const UrlResponse = require('./models/UrlResponse');
const Users = require('./models/Users')
const startCronJob = require('./cron');

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

const port = 3000;
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
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

