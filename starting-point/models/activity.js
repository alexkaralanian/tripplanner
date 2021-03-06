const Sequelize = require('sequelize')
const db = require('./db')

const Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    age_range: {
        type: Sequelize.STRING, //data-type string
        allowNull: true
    }
});

module.exports = Activity;