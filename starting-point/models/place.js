const Sequelize = require('sequelize');
const db = require('./db');

const Place = db.define('place', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.INTEGER, Sequelize.INTEGER), // (lat, lon float array)
        allowNull: false
    }

});


module.exports = Place;