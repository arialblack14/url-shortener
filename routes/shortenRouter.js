var express = require('express'),
    bodyParser = require('body-parser');
    // mongoose = require('mongoose');

// Check if the url is a proper one
var isValid = require('../isValid');


var Urls = require('../models/urls');

// Require the shortener module which returns the needed output
var shortener = require('../shortener');
// Build our router
var shortenRouter = express.Router();

shortenRouter.use(bodyParser.json());

// // This takes care of urls like www.example.com
// shortenRouter.route('/:short')
// .get(function(req, res, next) {
//   Urls.create(req.body, function(err, url) {
//     // Search our db if there is already the requested url in it
//     if (err) throw err;
//
//     if (isValid.isValid(url)) {
//
//       //url.original_url = req.params.short;
//       //url.short_url = '123';
//       var id = url._id;
//       console.log('New url created...');
//       res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         });
//         res.end('Added the url with id: ' + id);
//     }
//   });
// })
// .post(function(req, res, next) {
//   Urls.create(req.body, function(err, url) {
//     // Search our db if there is already the requested url in it
//     if (err) throw err;
//
//     if (isValid.isValid(url)) {
//
//       //url.original_url = req.params.short;
//       //url.short_url = '123';
//
//       console.log('New url created...');
//       res.send(url);
//     }
//   });
// });

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
