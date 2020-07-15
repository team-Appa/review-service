const faker = require('faker');
const random = require('random');
const fs = require('fs');

const numOfData = 10000000;

const reviewEntry = (id) => {
  var array = [];
  var randReviews = random.int(1, 10);
  for (var i = 0; i < randReviews; i++) {
    var day = faker.date.past(2);
    var fulldate = day.getFullYear() + '-' + getMonth(day) + '-' + getDate(day);
    var reviewEntry = {
      itemid: id,
      name: faker.name.findName(),
      location: faker.fake('{{address.city}} {{address.stateAbbr}}'),
      posttime: fulldate,
      title: faker.hacker.phrase(),
      comment: faker.lorem.sentence(),
      likes: random.int(0, 51),
      dislike: random.int(0, 51),
      star: random.int(0, 51),
    };
    array.push(reviewEntry);
  }
  return array;
};

var getMonth = (date) => {
  var result = date.getMonth() + 1;
  if (result < 10) {
    result = '0' + result;
  }
  return result;
};

var getDate = (date) => {
  var result = date.getDate();
  if (result < 10) {
    result = '0' + result;
  }
  return result;
};

var convertToCSV = (array) => {
  var header = [
    'itemid',
    'name',
    'location',
    'posttime',
    'title',
    'comment',
    'likes',
    'dislike',
    'star',
  ];
  var csvline = '';
  for (var j = 0; j < array.length; j++) {
    var json = array[j];
    for (var i = 0; i < header.length; i++) {
      var key = header[i];
      if (i === header.length - 1) {
        csvline += json[key];
      } else {
        csvline += json[key] + ';';
      }
    }
    csvline += '\n';
  }

  return csvline;
};

var writeReviews = fs
  .createWriteStream(`reviews3.csv`)
  .on('finish', () => console.log('Data generation finished'))
  .on('error', (err) => console.log(err));

var i = 8993000;
var start = Date.now();
write = () => {
  let ok = true;
  while (i < numOfData && ok) {
    var data = '';
    for (var j = i; j < i + 1000; j++) {
      data += convertToCSV(reviewEntry(j));
    }
    ok = writeReviews.write(data);
    i += 1000;
  }
  if (i < numOfData) {
    writeReviews.once('drain', write);
  } else {
    writeReviews.end();
    console.log(Date.now() - start);
  }
};
write();

module.export = datagen;
