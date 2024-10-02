const express= require('express')
const router = express.Router()
const workout = require('../models/workoutModel')
const {createWorkout} = require('../controllers/workoutController')
//Get all workouts
router.get('/',(req,res)=>{
    res.json({mssg: 'Get all workouts'})
})
//Get a single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get a single workout'})
})
//post a new workout
router.post('/', createWorkout)
//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete a workout'})
})
//update a workout
router.patch('/:id',(req,res)=> {
    res.json({mssg:'update a workout'})
})

module.exports = router