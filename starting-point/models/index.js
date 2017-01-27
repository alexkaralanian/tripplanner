'use strict';

const db = require('./db');
const Sequelize = require('sequelize')

var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

// ASSOCIATIONS:
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;
