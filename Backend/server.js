const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

mongoose.connect('<mongo_db_url>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});

app.post('/url-responses', async (req, res) => {
  try {
    const { url, responseTime } = req.body;
    const urlResponse = new UrlResponse({ url, responseTime });
    await urlResponse.save();
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

