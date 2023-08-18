const {Sequelize} = require("sequelize");

const sequilize = require('../util/database');

// Create a new model
// Define the model
const User = sequilize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
})

module.exports = User
