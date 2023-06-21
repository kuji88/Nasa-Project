const mongo = require('mongoose')

const PlanetsSchema = new mongo.Schema({
    keplerName: {
        type:String,
        required: true
    }
})

module.exports = mongo.model('planets', PlanetsSchema)