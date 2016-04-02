var express = require('express');
var router = express.Router();

// require our original url
var firstUrl = require('../firstUrl');

var shortener = require('../shortener');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome'});
});
/* redirect to the original url */
router.get('/:new', function(req, res, next) {
  res.redirect(firstUrl.firstUrl);
});

module.exports = router;
