const dotenv = require('dotenv');
require('dotenv').config({path:'./config/config.env'});

console.log(process.env.JWT_SECRET_KEY );
