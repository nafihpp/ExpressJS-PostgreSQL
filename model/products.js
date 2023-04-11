const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Products = sequelize.define("Products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
    timestamps: false,
});
Products.sync();

module.exports = Products;
