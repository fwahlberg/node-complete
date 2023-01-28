const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'H1llt0p01', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;