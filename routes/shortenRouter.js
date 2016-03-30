var express = require('express'),
    bodyParser = require('body-parser');

// Require the shortener module which returns the needed output
var shortener = require('../shortener');

var shortenRouter = express.Router();

shortenRouter.use(bodyParser.json());

// This takes care of urls like www.example.com
shortenRouter.route('/:short')
.get(function(req, res, next) {
  var result = shortener.shortener(req, req.params.short);
  // http://stackoverflow.com/questions/28869001/throw-message-typeerror-first-argument-must-be-a-string-or-buffer

  // With plain JSON i can't add the link to the short_url, so i will turn it into html
  res.setHeader('Content-Type', 'text/html');
  res.send('{ original_url:' + result.original_url +', short_url: <a href="' + req.params.short + '">' + result.short_url + '</a> }');

  // I can add the link in the views in the urls.jade
  // http://stackoverflow.com/questions/10919650/accessing-express-js-local-variables-in-client-side-javascript
  // res.render('urls', { title: 'JSON Response', original_url: JSON.stringify(result.original_url) , short_url: JSON.stringify(result.short_url) });
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
