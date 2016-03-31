var express = require('express');
var router = express.Router();

var shortener = require('../shortener');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome'});
});
/* redirect to the original url */
router.get('/:new', function(req, res, next) {
  res.redirect(GLOBAL_URL);
});

module.exports = router;
