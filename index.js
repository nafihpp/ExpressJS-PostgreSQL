const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./controllers/usersController");
const productRoutes = require("./controllers/productController");
// const orderRoutes = require("./controllers/orderController");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

app.use("/", userRoutes);
app.use("/", productRoutes);
// app.use("/", orderRoutes);

app.listen(process.env.PORT, () =>
    console.log(`Running on port ${process.env.PORT}`)
);
