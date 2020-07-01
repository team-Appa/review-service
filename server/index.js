const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const db = require('../db/index.js');
const Review = require('../db/comments.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api/reviews', function(req, res) {
  // console.log(req.query);
  const id = req.query.id;
  Review.find({ id })
    .exec((err, result) => {
      if (err) { console.log('Error getting reviews', err); }
      res.status(200).json(result[0].reviews);
    });
});

app.patch('/api/reviews', function(req, res) {
  const id = req.query.id;
  const filter = { _id: req.body._id };
  const updateLike = req.body.like ? true : false;

  Review.find({ id })
    .exec((err, result) => {
      if (err) { console.log('Error getting reviews', err); }

      let allReviews = result[0].reviews;

      for (let i = 0; i < allReviews.length; i++) {
        if (allReviews[i]._id.toString() === req.body._id) {
          if (updateLike) {
            allReviews[i].like += 1;
          } else {
            allReviews[i].dislike += 1;
          }
          break;
        }
      }

      Review.findOneAndUpdate({ id }, { reviews: allReviews}, (err, result) => {
        if (err) { console.log('Error updating reviews', err); }
        res.status(200).json(result);
      });
    });

});

module.exports = app;