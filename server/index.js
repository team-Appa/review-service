require('newrelic');
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});
const express = require('express');
//const morgan = require('morgan');
const cors = require('cors');
const {
  getAll,
  addLikes,
  postOne,
  deleteOne,
} = require('./constroller/controller.js');

// const Review = require('../db/comments.js');

const app = express();

//app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api/reviews', getAll);

app.put('/api/reviews/:reviewid', addLikes);

app.post('/api/reviews', postOne);

app.delete('/api/reviews/:reviewid', deleteOne);
module.exports = app;
