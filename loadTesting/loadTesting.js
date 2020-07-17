import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  discardResponseBodies: true,
  // scenarios: {
  //   contacts: {
  //     executor: 'constant-arrival-rate',
  //     rate: 1000, // 100 RPS, since timeUnit is the default 1s
  //     duration: '3m',
  //     preAllocatedVUs: 50,
  //     maxVUs: 1500,
  //   },
  // },
  stages: [
    { duration: '1m', target: 1 }, // below normal load
    { duration: '1m', target: 10 },
    { duration: '2m', target: 100 },
    { duration: '2m', target: 200 }, // around the breaking point
    { duration: '5m', target: 200 }, // around the breaking point
  ],
};

export default function () {
  var rand = Math.floor(Math.random() * 9999999);
  let responses = http.get(`http://localhost:3004/api/reviews/?id=${rand}`);
}
