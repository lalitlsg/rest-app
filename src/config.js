require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  url: process.env.URL,
  db: process.env.DB_NAME
};
