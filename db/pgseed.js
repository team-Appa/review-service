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

client.connect();
client.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

var path1 = path.resolve(__dirname, './reviews.csv');

var path2 = path.resolve(__dirname, './reviews2.csv');
var path3 = path.resolve(__dirname, './reviews3.csv');
client.query(
  `DROP TABLE IF EXISTS reviews;
  CREATE TABLE reviews (
      _id SERIAL,
      itemid int,
      name text,
      location text,
      posttime date,
      title text,
      comment text,
      likes int,
      dislike int,
      star int
      CONSTRAINT reviews_pk PRIMARY KEY (_id,itemid)
      );

  COPY reviews(itemid,name,location,posttime,title,comment,likes,dislike,star)
  FROM '${path1}'
  DELIMITER ';' CSV;

  COPY reviews(itemid,name,location,posttime,title,comment,likes,dislike,star)
  FROM '${path2}'
  DELIMITER ';' CSV;

  COPY reviews(itemid,name,location,posttime,title,comment,likes,dislike,star)
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
