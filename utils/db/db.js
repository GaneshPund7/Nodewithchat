const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('chatApp', 'postgres', 'Ganesh',{

    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize