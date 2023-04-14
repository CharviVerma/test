const express= require('express');
const cors = require('cors');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("h");
});

exports.test = function(req,res) {
  res.render('test');
};

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});