const faker = require('faker');

const storage = [];

const generate = function() {
  const timestamp = faker.date.past();
  const name = faker.name.findName();
  const location = faker.fake('{{address.city}}, {{address.stateAbbr}}');
  const title = faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}');
  const comment = faker.fake('{{hacker.phrase}} {{hacker.phrase}} {{hacker.phrase}}');

  const like = Math.floor(Math.random() * 51);
  const dislike = Math.floor(Math.random() * 51);
  const star = Math.ceil(Math.random() * 5);

  const newReview = {
    name, location, timestamp, title, comment, like, dislike, star
  };

  return newReview;
};

module.exports = {
  fill: function(n) {
    for (let i = 0; i < n; i++) {
      var generatedReview = generate();
      storage.push(generatedReview);
    }
    return storage;
  }
};