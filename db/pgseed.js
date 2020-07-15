const client = require('./index.js');

var path1 = path.resolve(__dirname, './reviews.csv');

var path2 = path.resolve(__dirname, './reviews2.csv');
var path3 = path.resolve(__dirname, './reviews3.csv');

//create index on coloumn itemid for sufficient look up
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
      CONSTRAINT reviews_pk PRIMARY KEY (_id)
      );
  CREATE INDEX item_idx ON reviews (itemid);
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
