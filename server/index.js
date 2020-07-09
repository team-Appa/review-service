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

app.get('/api/reviews', function (req, res) {
  // console.log(req.query);
  const itemid = req.query.id;
  Review.find({ id: itemid }).exec((err, result) => {
    if (err) {
      res.sendStatus(404).json('Error while getting reviews');
    }
    res.status(200).json(result[0].reviews);
  });
});

app.patch('/api/reviews', function (req, res) {
  const id = req.query.id;
  const filter = { _id: req.body._id };
  const updateLike = req.body.like ? true : false;

  Review.find({ id }).exec((err, result) => {
    if (err) {
      console.log('Error getting reviews', err);
    }

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

    Review.findOneAndUpdate(
      { id },
      { reviews: allReviews },
      { new: true },
      (err, result) => {
        if (err) {
          console.log('Error updating reviews', err);
        }
        res.status(200).json(result);
      }
    );
  });
});

app.put('/api/reviews/:reviewid', (req, res) => {
  const itemid = req.query.id;
  const reviewid = req.params.reviewid;
  console.log(reviewid);
  const updateLike = req.body.like ? true : false;

  if (updateLike) {
    Review.findOneAndUpdate(
      { id: itemid, 'reviews._id': reviewid },
      { $inc: { 'reviews.$.like': 1 } },
      {
        projection: { 'reviews.$': 1 },
      }
    ).exec((err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data.reviews[0]);
      }
    });
  } else {
    Review.findOneAndUpdate(
      { id: itemid, 'reviews._id': reviewid },
      { $inc: { 'reviews.$.dislike': 1 } },
      {
        projection: { 'reviews.$': 1 },
      }
    ).exec((err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(data.reviews[0]);
      }
    });
  }
});

app.post('/api/reviews', (req, res) => {
  const itemid = req.query.id;
  var newReview = {
    name: req.body.name,
    location: req.body.location,
    timestamp: req.body.timestamp,
    title: req.body.title,
    comment: req.body.comment,
    like: 0,
    dislike: 0,
    star: 0,
  };

  Review.findOneAndUpdate(
    { id: itemid },
    { $push: { reviews: newReview } }
  ).exec((err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendStatus(201);
    }
  });
});

app.delete('/api/reviews/:reviewid', (req, res) => {
  const itemid = req.query.id;
  const reviewid = req.params.reviewid;
  Review.update(
    { id: itemid, 'reviews._id': reviewid },
    { $pull: { reviews: { _id: reviewid } } }
  ).exec((err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});
module.exports = app;
