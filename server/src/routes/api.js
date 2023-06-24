const express = require('express')
const planetsRoute = require('./planets/planets.route')
const lunchesRoute = require('./lunches/lucnhes.route')
const api = express.Router();

api.use('/Planets',planetsRoute.planetsRoute)
api.use('/launches',lunchesRoute.lunchesRoute)


module.exports= api