# Turner challenge - Facundo Pezzola

This project only runs in development mode.

## Steps

1. The mysql and phpmyadmin are initialized and the schema.sql under db folder is executed
2. The server is started up and the tweets migration starts: GET tweets from search API and stored in the database.
3. The client is started up using webpack dev server (all the requests will be proxied to http://server:8000)

# Environment

1. The databse environments variables are allocated in docker-compese.yml file
2. The twitter accounts variables are allocated in .env file (Should not be commited, but i will do it just for the challenge)


## How to run it

This project is only prepared to run under docker environment.

- Clone the repository
- Build the containers executing `docker-compose build`
- Start the containers executing `docker-compose up` 
- Or you can run both commands simultaneously `docker-compose up --build` 

### Navigation

- The API will be exposed in http://localhost:8000
- The WebApp will be exposed in http://localhost:3000

## Inspect data

- The database is located in localhost:3306 challenge:challenge
- The API expones the following endpoint:
    - GET /api/tweets 
