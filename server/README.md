# Server

Express server with Knex + Postgres and Node.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

For development, you will only need Node.js and a postgres database installed on your environment.

    $ node --version
    v12.16.1

Create `.env` file, add `DATABASE_URL` variable

```
  DATABASE_URL = postgresql://<username>:<password>@localhost:5432/<db_name>
```

### Installing

    $ npm install
    $ npm run db:migrate
    $ npm run db:seed

### Starting Development Server

    $ npm run dev:server
