# Product Reviews

> Product Reviews module is a clone version of Guitar Center's review module. The review module includes the following:
1. Search functionality to filter reviews based on searched keyword.
1. Review list that displays all reviews.
1. Pagination

## Usage

> Please use this module with related project ( product browser, recently viewed items, and similar items )

## Related Projects
Services
- Product Browser:       https://github.com/Team-Katara/john-service
- Recently Viewed Items: https://github.com/Team-Katara/Shraya-Service
- Similar Items:         https://github.com/Team-Katara/Kana-service

Proxy
https://github.com/Team-Katara/Joel_Proxy

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Server Endpoints](#Server-Endpoints)
    * [/api/reviews](#GET)
    * [/api/reviews](#PATCH)


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
npm run db-dev
```

### Starting Server

Within the root directory:

```sh
npm run server-dev
```

## Server Endpoints

Getting reviews for an id : /api/reviews?id={}
  - GET Request
  - Expected Queries: id
  - Responses with randomly generated 14 to 20 reviews
  
Updating like/dislike : /api/reviews
  - PATCH Request
  - Expected Queries: id
  - Expected Body: 
    => _id: Associated _id with an individual review
    => like: like count for an individual review
    => dislike: dislike count for an individual review
  
  

