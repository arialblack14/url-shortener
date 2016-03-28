var express = require('express'),
    bodyParser = require('body-parser');

var shortenUrl = express.Router();
shortenUrl.use(bodyParser.json());

shortenUrl.route('/')

.get(function(req, res, next) {
  res.send("Hello World!");
});

module.exports = shortenUrl;
