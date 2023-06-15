const app = require('./app');
const {loadPlanets} = require('./model/Planets.model')
const mongoose = require('mongoose')

const PORT = process.env.PORT;
const MONGO_URL = 'mongodb+srv://kuji:LwrEhnFGNa6Zh5hM@nasa.pg4sgma.mongodb.net/?retryWrites=true&w=majority'

    mongoose.connection.once('open',()=>{
        console.log("mongo is ready!")
    })

    mongoose.connection.on('error',(err)=>{
        console.error(err)
    })

 const loadserver= async()=>{
    await mongoose.connect(MONGO_URL)
    await loadPlanets();
   app.app.listen(PORT, ()=>{
        console.log(`this server is working on ${PORT}`)
    })
}

loadserver();