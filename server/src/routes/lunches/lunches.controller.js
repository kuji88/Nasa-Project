const {launches} = require('../../model/lunches.model')

const getAlllaunches=  (req,res)=>{
    return res.status(200).json(Array.from(launches.values()))
}

module.exports = {
    getAlllaunches
}   