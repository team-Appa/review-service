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
  Review.find()
    .exec((err, result) => {
      if (err) console.log('Error getting reviews', err);
      res.status(200).json(result);
    });
});



const port = 3001;

app.listen(port, console.log(`Listening on http://localhost:${port}`));