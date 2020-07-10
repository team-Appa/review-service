const faker = require('faker');
const random = require('random');
const fs = require('fs');

const numOfData = 10000000;

const reviewEntry = () => ({
  itemid: random.int(0, numOfData),
  name: faker.name.findName(),
  location: faker.fake('{{address.city}} {{address.stateAbbr}}'),
  title: faker.fake('{{hacker.ingverb}} {{hacker.adjective}} {{hacker.noun}}'),
  comment: faker.fake('{{hacker.phrase}} {{hacker.phrase}} {{hacker.phrase}}'),

  like: random.int(0, 51),
  dislike: random.int(0, 51),
  star: random.int(0, 51),
});

var writeReviews = fs
  .createWriteStream(`reviews.csv`)
  .on('finsh', () => console.log('Data generation finished'))
  .on('error', (err) => console.log(err));

var convertToCSV = (json) => {
  var header = [
    'itemid',
    'name',
    'location',
    'title',
    'comment',
    'like',
    'dislike',
    'star',
  ];
  var csvline = '';
  for (var i = 0; i < header.length; i++) {
    var key = header[i];
    if (i === header.length - 1) {
      csvline += json[key];
    } else {
      csvline += json[key] + ',';
    }
  }
  csvline += '\n';
  return csvline;
};

var numOfReviews = numOfData * 5;

var i = 0;
write = () => {
  let ok = true;
  while (i < numOfReviews && ok) {
    data = convertToCSV(reviewEntry());
    ok = writeReviews.write(data);
    i++;
  }
  if (i < numOfReviews) {
    writeReviews.once('drain', write);
  } else {
    writeReviews.end();
  }
};
write();
