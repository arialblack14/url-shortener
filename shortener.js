var express = require('express'),
    bodyParser = require('body-parser');

// Check if the url is a proper one
var isValid = require('./isValid');

// This will hold the 5 character random string
var last = "";

exports.shortener = function(req, url) {
  if (isValid.isValid(url)) {
    last = Math.random().toString(36).substr(2, 5);
    // http://stackoverflow.com/questions/10183291/how-to-get-the-full-url-in-express
    return { "original_url": url , "short_url": (req.protocol + '://' + req.get('host') + "/" + last ) };
  } else {
    return "The url you provided is invalid."; // Does not catch all cases but will do for most
  }
};
// Handle request: http:// + url
exports.httpShortener = function(req, url) {
  if (isValid.isValid(url)) {
    last = Math.random().toString(36).substr(2, 5);
    return { "original_url": url , "short_url": (req.protocol + '://' + req.get('host') + "/" + last ) };
  } else {
    return "The url you provided is invalid.";
  }
};

// Handle request: https:// + url
exports.httpsShortener = function(req, url) {
  if (isValid.isValid(url)) {
    last = Math.random().toString(36).substr(2, 5);
    return { "original_url": url , "short_url": (req.protocol + '://' + req.get('host') + "/" + last ) };
  } else {
    return "The url you provided is invalid.";
  }
};
