var express = require('express'),
    bodyParser = require('body-parser');
    // mongoose = require('mongoose');

// Check if the url is a proper one
var isValid = require('../isValid');


// var Urls = require('../models/urls');

// Require the shortener module which returns the needed output
var shortener = require('../shortener');
// Build our router
var shortenRouter = express.Router();

shortenRouter.use(bodyParser.json());

// // This takes care of urls like www.example.com
shortenRouter.route('/:short')
.get(function(req, res, next) {
  res.send(shortener.shortener(req, 'http://' + req.params.short));
});

// Since i get a 404 if user requests for a url like http://www.example.com
// i implement an additional router function that handles this
shortenRouter.route('/http\://:short') // escape ":"
.get(function(req, res, next) {
  res.send(shortener.httpShortener(req, 'http://' + req.params.short));
});
shortenRouter.route('/https\://:short') // escape ":"
.get(function(req, res, next) {
  res.send(shortener.httpsShortener(req, 'https://' + req.params.short));
});

module.exports = shortenRouter;
