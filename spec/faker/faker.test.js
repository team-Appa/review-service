const faker = require('../../faker/faker.js');

test('faker module properly generates sample data', (done) => {
  const sampleData = faker.generate();

  expect(sampleData.length).not.toBe(0);
  expect(sampleData[0].title).not.toBeUndefined();
  done();
});