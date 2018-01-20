let mongoose = require('mongoose');

// Article schema
let articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

console.log('Defining Article');

let Article = module.exports = mongoose.model('article', articleSchema);
