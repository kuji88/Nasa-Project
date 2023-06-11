const express = require('express')
const {getAllPlanets} = require('../planets/Planets.Controller')


const planetsRoute = express.Router()

planetsRoute.get('/Planets',getAllPlanets)

module.exports= {planetsRoute}