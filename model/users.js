const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Order = require("./Order");
const address = require("./address");
const { profile } = require("console");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Create the "users" table if it doesn't exist
User.sync();

User.findByUsername = async function (username) {
    const user = await this.findOne({ where: { username } });
    return user;
};

// User.hasMany(Order, { foreignKey: "userId" });
// User.hasMany(address, { foreignKey: "addressId" });
// User.hasOne(profile, { foreignKey: "profileId" });

module.exports = User;
