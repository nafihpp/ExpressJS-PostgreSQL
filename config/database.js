const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("users", "postgres", "Nafihpp@123", {
    host: "localhost",
    dialect: "postgres",
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
        return sequelize.sync({ alter: true });
    })
    .then(() => console.log("Database synced successfully"))
    .catch((error) => console.log("Error syncing database:", error));

module.exports = sequelize;
