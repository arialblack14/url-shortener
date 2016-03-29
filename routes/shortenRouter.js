var express = require('express'),
    bodyParser = require('body-parser');

// Require the shortener module which returns the needed output
var shortener = require('../shortener');

var shortenRouter = express.Router();

shortenRouter.use(bodyParser.json());

// This takes care of urls like www.example.com
shortenRouter.route('/:short')
.get(function(req, res, next) {
  // http://stackoverflow.com/questions/28869001/throw-message-typeerror-first-argument-must-be-a-string-or-buffer
  res.send(shortener.shortener(req, req.params.short));
});

// Since i get a 404 if user requests for a url like http://www.example.com
// i implement an additional router function that handles this
shortenRouter.route('/http\://:short') // escape ":"
.get(function(req, res, next) {
  res.send(shortener.httpShortener(req, req.params.short));
});
shortenRouter.route('/https\://:short') // escape ":"
.get(function(req, res, next) {
  res.send(shortener.httpsShortener(req, req.params.short));
});

module.exports = shortenRouter;
