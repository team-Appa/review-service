import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  discardResponseBodies: true,
  stages: [
    { duration: '1m', target: 1 }, // below normal load
    { duration: '1m', target: 10 },
    { duration: '2m', target: 50 },
    { duration: '5m', target: 50 }, // around the breaking point
    // { duration: '5m', target: 100 }, // around the breaking point
  ],
  // ext: {
  //   loadimpact: {
  //     projectID: 3500599,
  //     // Test runs with the same name groups test runs together
  //     name: 'Cloud Test with 50 vus maxed',
  //   },
  // },
};

export default function () {
  // var rand = Math.floor(Math.random() * 10) + 9999000;
  var rand = Math.floor(Math.random() * 9999999);
  let responses = http.get(`http://3.221.150.39/api/reviews?id=${rand}`);
}
