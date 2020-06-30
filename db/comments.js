const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  id: Number,
  reviews: [
    {
      name: String,
      location: String,
      timestamp: String,
      title: String,
      comment: String,
      like: Number,
      dislike: Number,
      star: Number
    }
  ]
});

const Review = mongoose.model('review', reviewSchema);


module.exports = Review;