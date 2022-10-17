const path = require("path");

const dbname = process.env.NODE_ENV === "development" ? "movie-library" : "movie-library.test";

module.exports = {
  "development": {
    "storage": path.join(__dirname, "..", "storage", `${dbname}.sqlite`),
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
