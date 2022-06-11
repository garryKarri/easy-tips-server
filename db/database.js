require('dotenv').config();

const {
  DB_USER, DB_PORT, DB_PASS, DB_NAME, DB_HOST,
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT,
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT,
    dialectOptions: {
      ssl:  { rejectUnauthorized:false },
    },
  },
};
