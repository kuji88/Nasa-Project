const express = require('express');
const path = require('path')
const {planetsRoute} =require('./routes/planets/planets.route')
const {lunchesRoute} = require('./routes/lunches/lucnhes.route')
const cors = require('cors')

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"..","public")))
app.use(planetsRoute)
app.use(lunchesRoute)
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","public","index.html"))
})

module.exports= {app}