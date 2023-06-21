const { parse } = require('csv-parse');
const fs = require('fs');
const path= require('path')
const planets = require('./Planets.schema')


const loadPlanets=()=>{
    return new Promise((resolve,reject)=>{
        fs.createReadStream(path.join(__dirname,"..","..","data","kepler_data.csv"))
        .pipe(parse({
          comment: '#',
          columns: true,
        }))
        .on('data', async(data) => {
          if (isHabitablePlanet (data)) {
           mongoPlanets(data)
          }
        })
        .on('error', (err) => {
          console.log(err);
          reject(err)
        })
        .on('end', async(data) => {
          const nonee = (await getPlantes()).length
          console.log(`${nonee} habitable planets found!`);
          resolve();
        });
    })
}

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}




async function getPlantes(){
  return await planets.find({},{
    '__v': false,
    '_id':false
  })
}

async function mongoPlanets(data){
  await planets.updateOne({
    keplerName:data.kepler_name
  },
  {
    keplerName:data.kepler_name
  },
  {
    upsert: true
  })
}


module.exports= {getPlantes, loadPlanets}