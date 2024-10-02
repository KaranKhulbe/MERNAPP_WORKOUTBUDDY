require('dotenv').config()
const express =  require('express')
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')
//express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workout',workoutRoutes)
//connect to db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    //listen for request
app.listen(process.env.PORT, ()=>{
    console.log('listening on port ')
})
})
.catch((error)=>{
    console.log(error)
})

//listen for request
app.listen(process.env.PORT, ()=>{
    console.log('listening on port ')
})