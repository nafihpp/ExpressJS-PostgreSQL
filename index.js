const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const routes = require("./controllers/usersController");
dotenv.config();

app.use("/", routes);

app.listen(process.env.PORT, () =>
    console.log(`Running on port ${process.env.PORT}`)
);
