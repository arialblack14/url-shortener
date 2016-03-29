var express = require('express'),
    bodyParser = require('body-parser');

// Check if the url is a proper one
var isValid = require('./isValid');

// Push all new entries to an array which will hold all shortened urls
var urlArr = [];

exports.shortener = function(req, url) {
  if (isValid.isValid(url)) {
    urlArr.push(url);
    // Get last url entered
    var last = (urlArr.length -1);
    // http://stackoverflow.com/questions/10183291/how-to-get-the-full-url-in-express
    return { "original_url": url , "short_url": (req.protocol + '://' + req.get('host') + "/" + last ) };
  } else {
    return "The url you provided is invalid."; // Does not catch all cases but will do for most
  }
};
