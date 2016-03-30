// Require needed modules
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// Create the schema
var urlSchema = new Schema({
    original_url: {
      type: String,
      required: false
    },
    short_url: {
      type: String,
      required: false
    },
  }, {
    timestamps: true
});

// The schema is useless so far, so we need to create a model using it
var Urls = mongoose.model('Url', urlSchema);

// Make our model available to our node app
module.exports = Urls;
