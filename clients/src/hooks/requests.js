const Api_req = 'http://localhost:5000'

async function httpGetPlanets() {
  const respone = await fetch(`${Api_req}/Planets `)
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
  
  try {
    return await fetch(`${Api_req}/launches`,{
      method:"post"
      ,
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch)
      
    })
  } catch (error) {
    return{
      ok: false
    }
  }
  }

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${Api_req}/launches/${id}`,{
      method:"delete"
    })
  } catch (error) {
    console.log(error)
    return{
      ok:false
    }
  }
 

}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};