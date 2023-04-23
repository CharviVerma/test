const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UrlResponse = require('./models/UrlResponse');
const UrlInterval = require('./models/UrlInterval');

const app = express();
const port = 3100;
app.use(bodyParser.json());

mongoose.connect("localhost:27107/mydb", {
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
    res.sendStatus(500);
  }
});

app.get('/url-entries', async (req, res) => {
  try {
    const urlIntervels = await UrlIntervel.find();
    res.json(urlIntervels);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

