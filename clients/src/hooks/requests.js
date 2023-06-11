const Api_req = 'http://localhost:5000'

async function httpGetPlanets() {
  const respone = await fetch(`${Api_req}/Planets`)
  return await respone.json();
}

async function httpGetLaunches() {
  const respone = await fetch(`${Api_req}/launches`)
  const fetchAllLunches= await respone.json();
  return fetchAllLunches.sort((a,b)=>{
    return a.flightNumber - b.flightNumber;
  })
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};