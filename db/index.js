const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const { Pool, Client } = require('pg');
// pools will use environment variables
// for connection information
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: 'postgres',
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

client.connect(() => console.log('database connected'));
client.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = client;
