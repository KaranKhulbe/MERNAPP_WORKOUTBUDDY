const express= require('express')
const router = express.Router()
const workout = require('../models/workoutModel')
const {createWorkout,
      getWorkouts,
      getWorkouts
} = require('../controllers/workoutController')
//Get all workouts
router.get('/', getWorkouts)
    
//Get a single workout
router.get('/:id',getWorkout)

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