const db = require('./index.js');

const Samples = require('../faker/faker.js');
const Review = require('./comments.js');


const sampleReviews = Samples.fill();

const insertSampleReviews = function() {
  Review.create(sampleReviews)
    .then(() => db.close())
    .catch(err => console.log(err));
};

insertSampleReviews();