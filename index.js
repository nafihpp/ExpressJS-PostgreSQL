const express = require('express');
const jwt = require("jsonwebtoken");

const app = express();

app.get('/api', (req,res) => {
    res.json({
        message:"Welcome to the api"
    })
})

app.get('/api/posts', (req,res) =>{
    res.send("hello")
})

app.listen(5000, () => console.log("Running on port 5000"));