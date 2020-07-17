'use strict';
const random = require('random');
module.exports = {
  generateRandomId,
};

function generateRandomId(userContext, events, done) {
  // generate data with Faker:
  const id = random.int(0, 9999999);
  const likes = Math.random() >= 0.5;
  // add variables to virtual user's context:
  userContext.vars.id = id;
  userContext.vars.likes = likes;
  // continue with executing the scenario:
  return done();
}
