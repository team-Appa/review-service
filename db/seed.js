const db = require('./index.js');

const Samples = require('../faker/faker.js');
const Review = require('./comments.js');

const _data = [];

const insertSampleReviews = function() {
  for (let i = 0; i < 100; i++) {
    let reviewList = Samples.generate();
    _data.push({
      id: i + 1,
      reviews: reviewList
    });
  }

  Review.create(_data)
    .then(() => db.close())
    .catch(err => console.log(err));
};

insertSampleReviews();