require('dotenv').config();

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  jwtSecret: process.env.JWT_SECRET,
  db: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT || 'postgres',
  },
};