// Initilize Sequelize
// Gives me back a class that I can use to create a new model 
const Sequelize = require('sequilize');

const sequilize = require('../util/database');

// Create a new model
// Define the model
const Product = sequilize.define('product', {
    // Define the columns
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // Define the columns
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// exporting modal
module.exports = Product;