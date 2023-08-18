const {Sequelize} = require("sequelize");

const sequilize = require('../util/database');

const Order = sequilize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER
})

module.exports = Order