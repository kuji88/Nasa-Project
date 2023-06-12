const launches = new Map();

let latestFlightNumber=100;

const launch = {
    "flightNumber": 100,
    "mission": "Kleper mission",
    "rocket": "explorer the moon",
    "launchDate": new Date(),
    "target": "kleper 422-2",
    "customer": [
        "ZTM",
        "NASA"
    ],
    "upcoming":"true",
    "success":"true"
}

launches.set(launch.flightNumber, launch )
latestFlightNumber++;
const addNewLaunch = (launch)=>{
    launches.set(latestFlightNumber, Object.assign(launch,{
        flightNumber: latestFlightNumber,
        customer: ["ZTM", "NASA"],
        success: true,
        upcoming: true,
    }))
}

const existLaunch= (launchId)=>{
    return launches.has(launchId);
}

const abortedLaunch=(launchId)=>{
    const aborted = launches.get(launchId)
    aborted.upcoming =false
    aborted.success =false
    return aborted
}



module.exports= {
    launches,
    addNewLaunch,
    existLaunch,
    abortedLaunch,
}