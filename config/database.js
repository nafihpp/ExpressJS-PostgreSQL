const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("users", "postgres", "Nafihpp@123", {
    host: "localhost",
    dialect: "postgres",
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => console.log("Error connecting database", error));

module.exports = sequelize;
