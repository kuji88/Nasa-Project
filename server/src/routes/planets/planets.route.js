const express = require('express')
const {getAllPlanets} = require('../planets/Planets.Controller')
const {Planets} = require('../../model/Planets.model')


const planetsRoute = express.Router()

planetsRoute.get('/Planets',(req,res)=>{
    return res.status(200).json(Planets)
})

module.exports= {planetsRoute}