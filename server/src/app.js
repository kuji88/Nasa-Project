const express = require('express');
const path = require('path')
const {planetsRoute} =require('./routes/planets/planets.route')
const cors = require('cors')

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"..","public")))
app.use(planetsRoute)


module.exports= {app}