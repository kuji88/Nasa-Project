const {getPlantes} = require('../../model/Planets.model')

async function getAllPlanets(req,res){
    return res.status(200).json(await getPlantes())
}

module.exports= {getAllPlanets}