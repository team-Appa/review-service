# Load Testing Result

- Using k6

```sh
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
```

## Local Service

### - 500 max vus:

> Output:
> execution: local

     output: -
     script: loadTesting.js

    duration: -,  iterations: -
         vus: 1, max: 500

    done [==========================================================] 11m0s / 11m0s

    data_received..............: 1.1 GB 1.7 MB/s
    data_sent..................: 60 MB  91 kB/s
    http_req_blocked...........: avg=3.64µs   min=1µs      med=2µs      max=9.61ms  p(90)=4µs      p(95)=9µs
    http_req_connecting........: avg=308ns    min=0s       med=0s       max=2.14ms  p(90)=0s       p(95)=0s
    http_req_duration..........: avg=329.77ms min=683µs    med=431.21ms max=2.69s   p(90)=586.06ms p(95)=696.28ms
    http_req_receiving.........: avg=42.65µs  min=11µs     med=31µs     max=59.64ms p(90)=54µs     p(95)=65µs
    http_req_sending...........: avg=17.71µs  min=7µs      med=13µs     max=40.32ms p(90)=24µs     p(95)=30µs
    http_req_tls_handshaking...: avg=0s       min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s
    http_req_waiting...........: avg=329.71ms min=640µs    med=431.16ms max=2.69s   p(90)=585.98ms p(95)=696.2ms
    http_reqs..................: 584157 885.086353/s
    iteration_duration.........: avg=329.87ms min=748.88µs med=431.29ms max=2.69s   p(90)=586.17ms p(95)=696.44ms
    iterations.................: 584157 885.086353/s
    vus........................: 500    min=1   max=500
    vus_max....................: 500    min=500 max=500

### - 200 max vus:

> Output:
> execution: local

     output: -
     script: loadTesting.js

    duration: -,  iterations: -
         vus: 1, max: 200

    done [==========================================================] 11m0s / 11m0s

    data_received..............: 1.1 GB 1.7 MB/s
    data_sent..................: 60 MB  91 kB/s
    http_req_blocked...........: avg=3.04µs   min=0s       med=2µs      max=44.92ms p(90)=4µs      p(95)=5µs
    http_req_connecting........: avg=100ns    min=0s       med=0s       max=2.09ms  p(90)=0s       p(95)=0s
    http_req_duration..........: avg=145.78ms min=615µs    med=159.63ms max=1.69s   p(90)=258.21ms p(95)=304.07ms
    http_req_receiving.........: avg=36.54µs  min=13µs     med=30µs     max=13.68ms p(90)=53µs     p(95)=64µs
    http_req_sending...........: avg=16.35µs  min=6µs      med=13µs     max=44.5ms  p(90)=23µs     p(95)=30µs
    http_req_tls_handshaking...: avg=0s       min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s
    http_req_waiting...........: avg=145.73ms min=586µs    med=159.58ms max=1.69s   p(90)=258.14ms p(95)=303.98ms
    http_reqs..................: 581377 880.874215/s
    iteration_duration.........: avg=145.87ms min=668.93µs med=159.71ms max=1.69s   p(90)=258.31ms p(95)=304.17ms
    iterations.................: 581377 880.874215/s
    vus........................: 200    min=1   max=200
    vus_max....................: 200    min=200 max=200
