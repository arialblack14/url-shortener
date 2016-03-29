var express = require('express'),
    bodyParser = require('body-parser');

// Require the shortener module which returns the needed output
var shortener = require('../shortener');

var shortenRouter = express.Router();

shortenRouter.use(bodyParser.json());

shortenRouter.route('/:short')
.get(function(req, res, next) {
  // http://stackoverflow.com/questions/28869001/throw-message-typeerror-first-argument-must-be-a-string-or-buffer
  res.send(shortener.shortener(req, req.params.short));
});

module.exports = shortenRouter;
