# Load Testing Result

- Using k6

```sh
stages: [
    { duration: '1m', target: 1 }, // below normal load
    { duration: '1m', target: 10 },
    { duration: '2m', target: 100 },
    { duration: '2m', target: 200 }, // around the breaking point
    { duration: '5m', target: 200 }, // around the breaking point
  ],
```

## Local Service

### - First trial: 500 max vus:

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

### - First trial: 200 max vus:

> Output:
> execution: local

     output: -
     script: loadTesting.js

    duration: -,  iterations: -
         vus: 1, max: 200

    done [==========================================================] 11m0s / 11m0s

    data_received..............: 1.1 GB 1.6 MB/s
    data_sent..................: 58 MB  88 kB/s
    http_req_blocked...........: avg=3.19µs   min=1µs   med=2µs      max=53.37ms p(90)=4µs      p(95)=5µs
    http_req_connecting........: avg=123ns    min=0s    med=0s       max=4.57ms  p(90)=0s       p(95)=0s
    http_req_duration..........: avg=149.75ms min=710µs med=174.41ms max=1.6s    p(90)=236.35ms p(95)=265.01ms
    http_req_receiving.........: avg=38.69µs  min=19µs  med=33µs     max=15.27ms p(90)=55µs     p(95)=65µs
    http_req_sending...........: avg=16.71µs  min=7µs   med=14µs     max=31.03ms p(90)=25µs     p(95)=31µs
    http_req_tls_handshaking...: avg=0s       min=0s    med=0s       max=0s      p(90)=0s       p(95)=0s
    http_req_waiting...........: avg=149.69ms min=674µs med=174.37ms max=1.6s    p(90)=236.29ms p(95)=264.95ms
    http_reqs..................: 566026 857.615114/s
    iteration_duration.........: avg=149.83ms min=779µs med=174.47ms max=1.6s    p(90)=236.44ms p(95)=265.11ms
    iterations.................: 566026 857.615114/s
    vus........................: 200    min=1   max=200
    vus_max....................: 200    min=200 max=200
