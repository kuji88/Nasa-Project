const express = require('express')
const {getAlllaunches, postAllLaunches,deleteLaunch} = require('./lunches.controller')

const lunchesRoute = express.Router()

lunchesRoute.get('/', getAlllaunches)
lunchesRoute.post('/', postAllLaunches)
lunchesRoute.delete('/:id', deleteLaunch)


module.exports = {
    lunchesRoute
}