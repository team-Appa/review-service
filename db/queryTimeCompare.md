# DB QUERY RESULTS

## Postgres

### - Total records in database:

- ~55 million in 'reviews' table

### - 10 million primary apps w/ 2-10 reviews per app

### - Queries are performed on reviews from itemid 9,999,000

#### SELECT QUERY

`select * from reviews where itemid=9999000;`

> Output:

> Total query time: 2.99 msec. Rows affected 2

\_id | itemid | name | location | posttime | title | comment | likes | dislike | star
----------+---------+---------------------+-------------------------+------------+-------------------------------------------------------------------------------------+--------------------------------------------------+-------+---------+------
55006613 | 9999000 | Gayle Cormier | North Deborahborough AL | 2018-07-19 | connecting the port won't do anything, we need to parse the multi-byte EXE program! | Qui ipsum in harum mollitia in animi asperiores. | 14 | 14 | 26
55006614 | 9999000 | Dr. Josefina Conroy | Port Jimmy FL | 2019-04-15 | You can't connect the bandwidth without generating the digital THX application! | Et quos quibusdam. | 30 | 24 | 38

Time: 2.990 ms

`select * from reviews where _id=55006613;`

> Total query time: 1.068 msec. Rows affected 1

> Output:
> \_id | itemid | name | location | posttime | title | comment | likes | dislike | star
> ----------+---------+---------------+-------------------------+------------+-------------------------------------------------------------------------------------+--------------------------------------------------+-------+---------+------
> 55006613 | 9999000 | Gayle Cormier | North Deborahborough AL | 2018-07-19 | connecting the port won't do anything, we need to parse the multi-byte EXE program! | Qui ipsum in harum mollitia in animi asperiores. | 14 | 14 | 26
> (1 row)

Time: 1.068 ms

## Cassandra

### - Total records in database:

- ~55 million reviews in 'reviews_by_itemid' table

### - 10 million primary apps w/ 2-10 reviews per app

### - Queries are performed on reviews from appID 9 million

#### SELECT QUERY

> To get all item ids associated with the app

`select * from review_by_itemid where itemid=9990000 order by posttime ;`

> Output - review_by_itemid table:
> itemid | posttime | reviewid | comment | dislike | likes | location | name | star | title
> ---------+------------+--------------------------------------+--------------------------------------------------------+---------+-------+----------------------+-------------------+------+-------------------------------------------------------------------------------------------
> 9990000 | 2018-10-06 | 77ba53b3-aa00-4b57-9c94-3f62a9f5d892 | Consequatur vel mollitia quisquam et corrupti est. | 18 | 33 | South Anthony RI | Jeanne Stanton | 25 | We need to transmit the auxiliary AGP application!
> 9990000 | 2018-11-26 | fd4a1f92-7f09-4f7d-9da7-09199bdac7f6 | Autem recusandae odit enim hic maxime autem qui harum. | 44 | 40 | South Pascalestad VA | Dr. Zella Beer | 7 | The JSON driver is down, connect the cross-platform feed so we can connect the AGP pixel!
> 9990000 | 2018-12-14 | 73e96998-624c-420f-b6a0-c23b0dc59034 | Et vel molestiae. | 1 | 6 | South Lexistad IN | Michelle Hartmann | 39 | I'll input the haptic XSS port, that should program the SMTP monitor!
> 9990000 | 2020-01-09 | cefbde46-b29c-4ffb-b265-c6276d212f75 | Et odit tempora laborum eos quisquam tenetur ea. | 32 | 51 | Bartelltown IA | Ryley Rowe | 0 | Use the multi-byte GB firewall, then you can back up the digital protocol!
> 9990000 | 2020-05-18 | 2340466e-5533-4dfe-8284-7433eb29b8be | Molestiae et necessitatibus iusto architecto culpa. | 36 | 35 | Edwinmouth UT | Dianna Balistreri | 24 | hacking the protocol won't do anything, we need to transmit the back-end ADP hard drive!

> Total query time - 4.7ms

Tracing session: 805ba080-c59c-11ea-a9a6-7fff7b9fbc05

activity | timestamp | source | source_elapsed | client
--------------------------------------------------------------------------------------------+----------------------------+-----------+----------------+-----------
Execute CQL3 query | 2020-07-14 01:37:34.728000 | 127.0.0.1 | 0 | 127.0.0.1
Parsing select \* from review_by_itemid where itemid=9990000; [Native-Transport-Requests-1] | 2020-07-14 01:37:34.728000 | 127.0.0.1 | 187 | 127.0.0.1
Preparing statement [Native-Transport-Requests-1] | 2020-07-14 01:37:34.728000 | 127.0.0.1 | 417 | 127.0.0.1
Executing single-partition query on review_by_itemid [ReadStage-2] | 2020-07-14 01:37:34.729000 | 127.0.0.1 | 1146 | 127.0.0.1
Acquiring sstable references [ReadStage-2] | 2020-07-14 01:37:34.729000 | 127.0.0.1 | 1195 | 127.0.0.1
Skipped 0/10 non-slice-intersecting sstables, included 0 due to tombstones [ReadStage-2] | 2020-07-14 01:37:34.729000 | 127.0.0.1 | 1292 | 127.0.0.1
Key cache hit for sstable 351 [ReadStage-2] | 2020-07-14 01:37:34.730000 | 127.0.0.1 | 2237 | 127.0.0.1
Bloom filter allows skipping sstable 160 [ReadStage-2] | 2020-07-14 01:37:34.730000 | 127.0.0.1 | 2463 | 127.0.0.1
Bloom filter allows skipping sstable 352 [ReadStage-2] | 2020-07-14 01:37:34.730000 | 127.0.0.1 | 2616 | 127.0.0.1
Bloom filter allows skipping sstable 18 [ReadStage-2] | 2020-07-14 01:37:34.730000 | 127.0.0.1 | 2662 | 127.0.0.1
Bloom filter allows skipping sstable 354 [ReadStage-2] | 2020-07-14 01:37:34.731000 | 127.0.0.1 | 3179 | 127.0.0.1
Bloom filter allows skipping sstable 89 [ReadStage-2] | 2020-07-14 01:37:34.731000 | 127.0.0.1 | 3247 | 127.0.0.1
Bloom filter allows skipping sstable 355 [ReadStage-2] | 2020-07-14 01:37:34.731000 | 127.0.0.1 | 3327 | 127.0.0.1
Partition index lookup allows skipping sstable 353 [ReadStage-2] | 2020-07-14 01:37:34.731000 | 127.0.0.1 | 3419 | 127.0.0.1
Bloom filter allows skipping sstable 33 [ReadStage-2] | 2020-07-14 01:37:34.731000 | 127.0.0.1 | 3457 | 127.0.0.1
Bloom filter allows skipping sstable 356 [ReadStage-2] | 2020-07-14 01:37:34.731000 | 127.0.0.1 | 3500 | 127.0.0.1
Merged data from memtables and 1 sstables [ReadStage-2] | 2020-07-14 01:37:34.732000 | 127.0.0.1 | 4399 | 127.0.0.1
Read 5 live rows and 0 tombstone cells [ReadStage-2] | 2020-07-14 01:37:34.732000 | 127.0.0.1 | 4467 | 127.0.0.1
Request complete | 2020-07-14 01:37:34.732713 | 127.0.0.1 | 4713 | 127.0.0.1
