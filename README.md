# Katar-a Center

Web application for guitar shopping.
This is the customer reviews module in this project.
This a project mainly focuson backend optimization. With load-balancer and database optimization. This service can achieve 1000 RPS (requests per second) and 0% error rate on AWS EC2 t2.micro instace.

## Usage

> Please use this module with related project ( product browser, recently viewed items, and similar items )

## Related Projects

Services

- Product Browser: https://github.com/team-Appa/image-browser
- Recently Viewed Items: https://github.com/team-Appa/photo-carousel
- Similar Items: https://github.com/team-Appa/similaritems-service

Proxy:
https://github.com/team-Appa/jing-proxy

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Server Endpoints](#Server-Endpoints)
   - [GET /api/reviews](#GET)
   - [GET /api/reviews/:reviewid](#GETONE)
   - [PUT /api/reviews/:reviewid](#PUT)
   - [POST /api/reviews](#POST)
   - [DELETE /api/reviews/:reviewid](#DELETE)

## Requirements

- Node 6.13.0

## Development

### Installing Dependencies

Within the root directory:

```sh
npm install
```

### Seeding Database

Within the root directory:

```sh
npm run db:setuppg
```

### Starting Server

Within the root directory:

```sh
npm start
```

### Starting Webpack

Within the root directory:

```sh
npm run build
```

## Server Endpoints

### GET

Getting reviews for an itemid : /api/reviews?id={}

- GET Request
- Expected Queries: id
- Responses with randomly generated 2 to 8 reviews

### GETONE

Getting reviews for an itemid : /api/reviews/:reviewid?id={}

- GET Request
- Expected Queries: id
- Eepected Params: reviewid
- Responses with one review according to the reviewid

### PUT

Updating like/dislike : /api/reviews/:reviewid?id={}

- PUT Request
- Expected Queries: id
- Expected Params: reviewid
- Expected Body:
  => like: boolean variables indicate if it's like or dislike

### POST

Post one review: /api/reviews?id={}

- POST Request
- Expected Queries: id
- Expected Body:
  => name: username of the review author
  => location: user location
  => timestamp: time of posting review
  => title: review title
  => comment: review content

### DELETE

Delete a review by its id : /api/reviews/:reviewid?id={}

-DELETE Request

- Expected Queries: id
- Expected Params: reviewid

## Authors

- **Jing Chen** - [Katar-a Center-Review Module](https://github.com/team-Appa/review-service)
