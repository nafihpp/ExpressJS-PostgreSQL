const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const dataQuery = require("./config/database");
dotenv.config();

app.get("/api", (req, res) => {
    res.json({
        message: `hello welcome to the website running in ${process.env.PORT}`,
    });
});

app.post("/api/posts", (req, res) => {
    res.post("hello");
});

app.listen(process.env.PORT, () =>
    console.log(`Running on port ${process.env.PORT}`)
);
