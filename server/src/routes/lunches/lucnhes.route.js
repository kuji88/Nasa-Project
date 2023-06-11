const express = require('express')
const {getAlllaunches} = require('./lunches.controller')

const lunchesRoute = express.Router()

lunchesRoute.get('/launches', getAlllaunches)

module.exports = {
    lunchesRoute
}