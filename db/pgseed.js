require('dotenv').config();

const path = require('path');
const { Pool, Client } = require('pg');
// pools will use environment variables
// for connection information
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: 'testdb',
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

client.connect();
client.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

var path1 = path.resolve(__dirname, './reviews.csv');
console.log(path1);
var path2 = path.resolve(__dirname, './reviews2.csv');
var path3 = path.resolve(__dirname, './reviews3.csv');
client.query(
  `DROP TABLE IF EXISTS reviews;
  CREATE TABLE reviews (
      _id SERIAL PRIMARY KEY,
      itemid int,
      name text,
      location text,
      title text,
      comment text,
      likes int,
      dislike int,
      star int);

  COPY reviews(itemid,name,location,title,comment,likes,dislike,star)
  FROM '${path1}'
  DELIMITER ';' CSV;

  COPY reviews(itemid,name,location,title,comment,likes,dislike,star)
  FROM '${path2}'
  DELIMITER ';' CSV;

  COPY reviews(itemid,name,location,title,comment,likes,dislike,star)
  FROM '${path3}'
  DELIMITER ';' CSV;
      `,
  (err, res) => {
    if (err) {
      throw err;
    }
    console.log(`Postgres running on port ${process.env.PGPORT}`);
    client.end();
  }
);
