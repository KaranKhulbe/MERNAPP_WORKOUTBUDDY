const express= require('express')
const router = express.Router()
//Get all workouts
router.get('/',(req,res)=>{
    res.json({mssg: 'Get all workouts'})
})
//Get a single workout
router.get('/:id',(res,req)=>{
    res.json({mssg:'Get a single workout'})
})
//post a new workout

module.exports = router