const path = require("path");
const env = require("dotenv");

env.config({
  path: process.env.ENV_FILE_PATH,
});

const dbname = process.env.NODE_ENV !== "development" ? "movie-library.test" : "movie-library";

module.exports = {
  "development": {
    "storage": path.join(__dirname, "..", "storage", `${dbname}.sqlite`),
    "dialect": "sqlite"
  },
  "test": {
    "storage": path.join(__dirname, "..", "storage", `${dbname}.sqlite`),
    "dialect": "sqlite"
  },
  "production": {
    "storage": path.join(__dirname, "..", "storage", `${dbname}.sqlite`),
    "dialect": "sqlite"
  }
}
