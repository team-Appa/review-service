import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  discardResponseBodies: true,
  stages: [
    { duration: '1m', target: 1 }, // below normal load
    { duration: '1m', target: 10 },
    { duration: '2m', target: 50 },
    { duration: '2m', target: 50 }, // around the breaking point
    // { duration: '5m', target: 200 }, // cloud testing won't allow more than 50 vus
  ],
  ext: {
    loadimpact: {
      projectID: 3500599,
      // Test runs with the same name groups test runs together
      name: 'Cloud Test with 50 vus maxed',
    },
  },
};

export default function () {
  var rand = Math.floor(Math.random() * 10) + 9999000;
  let responses = http.get(`http://54.144.251.21:3004/api/reviews/?id=${rand}`);
}
