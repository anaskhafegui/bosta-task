# Kezz Task

Build an uptime monitoring RESTful API server that allows authenticated users to monitor URLs, and get detailed uptime reports about their availability, average response time, and total uptime/downtime.

## Dev tools: -

- TypeScript
- Node version:- v16.15.1
- NestJS
- PostgreSQL
- JWT

## Run the app in your machine: -

- clone the project and setup the env file

```bash

##Mac Os, Ubuntu and windows users continue here:
* Create a postgress database and connect to it 
* Download node js
* Open the console and cd your project root directory
* Run docker build .  in root folder
```

## How to run the test suite in nestJS application

```bash
npm test
```

## Endpoint Default Path

```url
/api
```

## API Endpoints For Authentication Checks Reports

#### CRUD /checks

get/post/patch/delete checks.

#### CRUD /reports

get/post/patch/delete report.
