# Product Reviews

> Product Reviews module is a clone version of Guitar Center's review module. The review module includes the following:

1. Search functionality to filter reviews based on searched keyword.
1. Review list that displays all reviews.
1. Pagination

## Usage

> Please use this module with related project ( product browser, recently viewed items, and similar items )

## Related Projects

Services

- Product Browser: https://github.com/Team-Katara/john-service
- Recently Viewed Items: https://github.com/Team-Katara/Shraya-Service
- Similar Items: https://github.com/Team-Katara/Kana-service

Proxy
https://github.com/Team-Katara/Joel_Proxy

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Server Endpoints](#Server-Endpoints)
   - [GET /api/reviews](#GET)
   - [PATCH /api/reviews](#PATCH)
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
npm run db:setup
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

Getting reviews for an id : /api/reviews?id={}

- GET Request
- Expected Queries: id
- Responses with randomly generated 14 to 20 reviews

### PATCH

Updating like/dislike : /api/reviews?id={}

- PATCH Request
- Expected Queries: id
- Expected Body:
  => \_id: Associated \_id with an individual review
  => like: like count for an individual review
  => dislike: dislike count for an individual review

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
