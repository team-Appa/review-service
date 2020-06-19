const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/review';

const db = mongoose.connect(mongoUri, {useMongoClient: true});

module.exports = db;