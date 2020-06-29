const express = require('express');
const morgan = require('morgan');
const path = require('path');

const db = require('../db/index.js');
const Review = require('../db/comments.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api/reviews', function(req, res) {
  // console.log(req.query);
  const id = req.query.id;
  Review.find({ id })
    .exec((err, result) => {
      if (err) { console.log('Error getting reviews', err); }
      res.status(200).json(result);
    });
});

app.patch('/api/reviews', function(req, res) {
  const filter = { _id: req.body._id };
  const update = req.body.like ? { like: req.body.like + 1 } : { dislike: req.body.dislike + 1 };

  Review.findOneAndUpdate(filter, update, (err, result) => {
    if (err) {
      console.log('Error making a patch req in server', err);
    }
    res.status(201).json(result);
  });

});

module.exports = app;