# Product Reviews

> Project description

## Usage

> Please use this module with related project ( product browser, recently viewed items, and similar items )

## Related Projects
Services
- Product Browser:       https://github.com/teamName/repo
- Recently Viewed Items: https://github.com/teamName/repo
- Similar Items:         https://github.com/teamName/repo

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
  
  

