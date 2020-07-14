const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc',
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Cassandras has been successfully connected');
  }
});
