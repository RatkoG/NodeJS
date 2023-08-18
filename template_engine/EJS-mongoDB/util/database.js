const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('node-complete', 'root', 'Ratko172', {
  dialect: 'mysql', 
  host: 'localhost'
})

// This is data connection pool by sequelize 
module.exports = sequelize