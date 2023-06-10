const {Planets} = require('../../model/Planets.model')

function getAllPlanets(req,res){
    return res.status(200).json(Planets)
}

module.exports= {getAllPlanets}