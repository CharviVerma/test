const mongoose = require('mongoose');
const UrlResponse = require('./UrlResponse');

UrlResponse.deleteMany({}).then(function() {
    console.log('All UrlResponse documents deleted');
}).catch(function(error){
    console.log(error); // Failure
});