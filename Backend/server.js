const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const urlRoutes = require('./routes/urlRoutes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config({path:'./config/config.env'});
const app = express()

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

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


app.use('/api', urlRoutes);
app.use('/api', authRoutes);

app.listen(process.env.PORT,()=>{
  console.log(`server started on PORT:${process.env.PORT} in ${process.env.NODE_ENV} node.`)
})

