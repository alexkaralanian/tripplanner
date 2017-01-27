const Sequelize = require('sequelize')
const db = require('./db')

const Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.INTEGER, // INTEGER or NUMBER?
        allowNull: false
    },
    amenities: {
        type: Sequelize.STRING, // (comma delim string list)
        allowNull: true
    }

});

module.exports = Hotel;