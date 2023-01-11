const Sequelize = require("sequelize");
const database = require("./database");

const EcommerceModel = sequelize.define("ecommerce", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});

module.exports = EcommerceModel;
