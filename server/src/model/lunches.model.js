const launches = new Map();

let latestFlightNumber=100;

const launch = {
    "flightNumber": 100,
    "mission": "Kleper mission",
    "rocket": "explorer the moon",
    "launchDate": new Date("2030"),
    "destination": "kleper 422-2",
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

module.exports= {
    launches,
    addNewLaunch,
}