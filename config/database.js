const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    database: "postgresql", // specify the database name
    username: "postgres", // specify the username of the database
    password: "Nafihpp@123", // specify the password of the database
    host: "localhost", // specify the host where the database is located
    dialect: "postgres", // specify the dialect of the database management system
});
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => console.log("Error connecting database", error));

module.exports = sequelize;
