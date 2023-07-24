const mongoose = require('mongoose')


const MONGO_URL = 'your mongoDB URL:)'

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
