const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const { Client } = require('pg');
// pools will use environment variables
// for connection information
const client = new Client({
  user: 'jingchen',
  host: '54.175.198.90',
  database: 'postgres',
  password: '1234',
  port: 5432,
});

client.connect(() => console.log('database connected'));
client.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = client;
