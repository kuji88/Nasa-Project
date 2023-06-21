const mongoose = require('mongoose')


const MONGO_URL = 'mongodb+srv://kuji:LwrEhnFGNa6Zh5hM@nasa.pg4sgma.mongodb.net/?retryWrites=true&w=majority'

    mongoose.connection.once('open',()=>{
        console.log("mongo is ready!")
    })

    mongoose.connection.on('error',(err)=>{
        console.error(err)
    })

async function connectionsMongo(){
  await  mongoose.connect(MONGO_URL)
}

module.exports={
    connectionsMongo
}