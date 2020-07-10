const faker = require('faker');
const random = require('random');
const fs = require('fs');

const numOfData = 10000000;

const reviewEntry = () => ({
  itemid: random.int(0, numOfData),
  name: faker.name.findName(),
  location: faker.fake('{{address.city}}, {{address.stateAbbr}}'),
  title: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  comment: faker.fake('{{hacker.phrase}} {{hacker.phrase}} {{hacker.phrase}}'),

  like: random.int(0, 51),
  dislike: random.int(0, 51),
  star: random.int(0, 51),
});

const writeReviews = fs.createWriteStream('reviews.csv');

function writeFiftyMillionTimes(writer, encoding, callback) {
  let data = '';
  let i = numOfData * 5;
  write();

  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        data = JSON.stringify(reviewEntry()) + '\n';
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}
writeFiftyMillionTimes(writeReviews, 'utf8', () => writeReviews.end());
