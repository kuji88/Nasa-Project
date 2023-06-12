const express = require('express')
const {getAllPlanets} = require('../planets/Planets.Controller')


const planetsRoute = express.Router()

planetsRoute.get('/',getAllPlanets)

module.exports= {planetsRoute}