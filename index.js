const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { DataSource } = require("typeorm");

//port
const port = process.env.PORT || 5000;

//config
const corsOptions = require("./config/corsConfig");
const dbConfig = require("./config/database");

//Routes Import
const userRoutes = require("./controllers/usersController");
const productRoutes = require("./controllers/productController");

//Cors and BodyParser
app.use(cors(corsOptions));
app.use(bodyParser.json());

//Routes
app.use("/", userRoutes);
app.use("/", productRoutes);

//DB
const Database = new DataSource({
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    entities: dbConfig.entities,
    synchronize: dbConfig.synchronize,
});

Database.initialize()
    .then((response) => {
        console.log("Database PostgresQL Working on Port 5432");
    })
    .catch((error) => {
        console.log(error, `error occured connectiong ${dbConfig.type}`);
    });

app.listen(process.env.PORT, () => console.log(`Running on port ${port}`));
