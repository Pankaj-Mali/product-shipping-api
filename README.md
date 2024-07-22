# Supply Chain Management API

This project is a RESTful API for managing supply chain operations, including products,
suppliers, customers, orders, and shipments. It is built using Node.js, Express, and Sequelize, 
with PostgreSQL/MySQL as the database. The API supports CRUD operations for each entity and includes functionalities 
such as inventory tracking, order fulfillment, and generating supply chain reports.
Authentication is implemented using Google OAuth 2.0 and JWT tokens.

### Prerequisites

- Node.js (>=14.x.x)
- npm (>=6.x.x)
- PostgreSQL or MySQL
- Google OAuth 2.0 credentials

### Environment Variables

Create a `.env` file in the root directory with the following environment variables:

JWT_SECRET= JWT_SECRET
DATABASE_NAME="DATABASE_NAME"
DATABASE_USER="DATABASE_USER"
DATABASE_PASSWORD="DATABASE_PASSWORD"
DATABASE_HOST="/var/run/postgresql"
DATABASE_DIALECT='postgres'
PORT = "3000"
GOOGLE_CLIENT_ID =  GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET = GOOGLE_CLIENT_SECRET

## Setup

1. Clone the repository:
```git clone https://github.com/your-username/supply-chain-management-api.git```
cd supply-chain-management-api

2. Install Dependencies:
   ```npm install```

4. Running Application:
 ```npm start```


