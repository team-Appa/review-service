require('dotenv').config();

const { Pool, Client } = require('pg');
// pools will use environment variables
// for connection information
const client = new Client({
  user: 'jingchen',
  host: 'localhost',
  database: 'postgres',
  password: null,
  port: 5432,
});
client.connect();
client.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

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
  FROM '/Users/jingchen/Documents/HackReactor/Project/SDC/review-service/db/reviews.csv'
  DELIMITER ';' CSV;
      `,
  (err, res) => {
    if (err) {
      throw err;
    }
    console.log('Postgres running on port 5432');
    client.end();
  }
);
