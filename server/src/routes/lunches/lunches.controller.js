const {getAllDlaunches, saveLaunch,existLaunch, abortedLaunch} = require('../../model/lunches.model')

const getAlllaunches=  async(req,res)=>{
    return await res.status(200).json(await getAllDlaunches())
}

const postAllLaunches = async(req,res)=>{
    const launch = req.body;
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            "error":"Something missing"
        })
    }

    launch.launchDate = new Date(launch.launchDate)
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            "error":"launch Date is worng"
        })
    }

   await saveLaunch(launch)
   return res.status(200).json(launch)

}

const deleteLaunch = async(req,res)=>{
    const launchId = Number(req.params.id);
    const ifexist = await existLaunch(launchId)
    if(!ifexist){
        return res.status(400).json({
            error: "launch not found"
        })
    };
    const aborted = await abortedLaunch(launchId); 
    if(!aborted){
       return  res.status(404).json({
            error:"there's errorrrr"
        })
    }
    return res.status(200).json(
        {
            ok:true
        }
    );
}



module.exports = {
    getAlllaunches,
    postAllLaunches,
    deleteLaunch
}   