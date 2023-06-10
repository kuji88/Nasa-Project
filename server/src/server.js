const app = require('./app');
const {loadPlanets} = require('./model/Planets.model')

const PORT = process.env.PORT;

 const loadserver= async()=>{
    await loadPlanets();
   app.app.listen(PORT, ()=>{
        console.log(`this server is working on ${PORT}`)
    })
}

loadserver();