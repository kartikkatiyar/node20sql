const express = require("express");
const dotenv = require("dotenv");
const { pool } = require("./db/config");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

pool
  .getConnection()
  .then(() => {
    console.log("db connected");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
