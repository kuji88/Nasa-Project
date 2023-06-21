const launchesData = require('./launches.schema')
const planet = require('./Planets.schema')

let latestFlightNumber=100;

const launch = {
    "flightNumber": 100,
    "mission": "Kleper mission",
    "rocket": "explorer the moon",
    "launchDate": new Date(),
    "target": "Kepler-1652 b",
    "customer": [
        "ZTM",
        "NASA"
    ],
    "upcoming":"true",
    "success":"true"
}



async function sortFlightNumber(){
    const flightFilter = await launchesData.findOne().sort("-flightNumber")

    if(!flightFilter){
        return latestFlightNumber
    }   

    return flightFilter.flightNumber
}


async function saveLaunchesData(data){
   const planets =  await planet.findOne({
        keplerName: data.target
    })

    if(!planets){
    throw new Error("Error handling")}

    await launchesData.findOneAndUpdate({
        flightNumber: data.flightNumber
    },data,{ upsert:true })
}

const saveLaunch= async(launch)=>{
    const getFlight = await sortFlightNumber() + 1;
        
        const newLaunch = Object.assign(launch,{
            flightNumber: getFlight,
            customer: ["ZTM", "NASA"],
            success: true,
            upcoming: true,
        })
       await saveLaunchesData(newLaunch)
    
}


const existLaunch= async(launchId)=>{
    return await launchesData.findOne({
        flightNumber: launchId
    })
}

const abortedLaunch= async(launchId)=>{
     const aborted = await launchesData.updateOne({
        flightNumber: launchId
    },
    {
        success: false,
        upcoming: false
    })

    return aborted.modifiedCount === 1;
}


async function getAllDlaunches(){
    return await launchesData.find({},{ '_id':0, "__v":0})
 }


module.exports= {
    saveLaunch,
    existLaunch,
    abortedLaunch,
    getAllDlaunches
}