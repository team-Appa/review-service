require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const client = require('../db/index.js');
// const Review = require('../db/comments.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api/reviews', function (req, res) {
  // console.log(req.query);
  const itemid = req.query.id;
  var query = 'select * from reviews where itemid=$1';
  client
    .query(query, [itemid])
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => res.status(404).json(err));
});

app.get('/api/reviews/:reviewid', function (req, res) {
  const itemid = req.query.id;
  var reviewid = req.params.reviewid;
  var query = 'select * from reviews where itemid=$1 and _id=$2';
  var params = [itemid, reviewid];
  client
    .query(query, params)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => res.status(404).json(err));
});

app.put('/api/reviews/:reviewid', (req, res) => {
  const itemid = req.query.id;
  const reviewid = req.params.reviewid;
  var params = req.body.like ? [1, itemid, reviewid] : [-1, itemid, reviewid];
  var query = 'update reviews set likes=likes+$1 where itemid=$2 and _id=$3';
  client
    .query(query, params)
    .then((data) => res.sendStatus(200))
    .catch((err) => res.status(404).json(err));
});

app.post('/api/reviews', (req, res) => {
  const itemid = req.query.id;
  var params = [
    itemid,
    req.body.name,
    req.body.location,
    req.body.posttime,
    req.body.title,
    req.body.comment,
    0,
    0,
    0,
  ];
  var query =
    'INSERT INTO reviews (itemid,name,location,posttime,title,comment,likes,dislike,star) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;';
  client
    .query(query, params)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => res.status(404).json(err));
});

app.delete('/api/reviews/:reviewid', (req, res) => {
  const itemid = req.query.id;
  const reviewid = req.params.reviewid;
  var params = [itemid, reviewid];
  var query = 'DELETE FROM reviews WHERE itemid=$1 and _id=$2';
  client
    .query(query, params)
    .then((data) => res.sendStatus(200))
    .catch((err) => res.status(404).json(err));
});
module.exports = app;
