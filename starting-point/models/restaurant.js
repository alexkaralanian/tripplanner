const Sequelize = require('sequelize')
const db = require('./db')


const Restaurant = db.define('activity', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cuisine: {
        type: Sequelize.STRING,
        allowNull: true
    },

    price: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Restaurant;
