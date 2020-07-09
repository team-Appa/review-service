const faker = require('faker');
const random = require('random');

//gloable variable for total data entry point
const numOfData = 10;
//number of reviews will be 5-10 times of num of data point
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

var dataChunk = () => {
  var chunk = [];
  //numOfData is the number of reviews
  for (var i = 0; i < numOfData * 10; i++) {
    chunk.push(reviewEntry());
  }
  return chunk;
};

var convertCSV = (json) => {
  var header = Object.keys(json[0]);

  var csv = header.join(',') + '\n';

  for (var i = 0; i < json.length; i++) {
    var line = '';
    for (var j = 0; j < header.length; j++) {
      var key = header[j];
      line += json[i][key] + ',';
    }
    csv += line.slice(0, line.length - 1) + '\n';
  }
  return csv;
};
var data = dataChunk();
// console.log(data);

console.log(convertCSV(data));
