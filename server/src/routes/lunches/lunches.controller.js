const {launches, addNewLaunch,existLaunch, abortedLaunch} = require('../../model/lunches.model')


const getAlllaunches=  (req,res)=>{
    return res.status(200).json(Array.from(launches.values()))
}

const postAllLaunches = (req,res)=>{
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

    addNewLaunch(launch)
    res.status(200).json(launch)

}

const deleteLaunch = (req,res)=>{
    const launchId = Number(req.params.id);

    if(!existLaunch(launchId)){
        return res.status(400).json({
            error: "launch not found"
        })
    };
    const aborted = abortedLaunch(launchId);
    return res.status(200).json(aborted);
}



module.exports = {
    getAlllaunches,
    postAllLaunches,
    deleteLaunch
}   