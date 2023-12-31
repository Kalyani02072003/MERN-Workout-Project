const express = require('express')
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()

//GET all workouts
router.get('/',getWorkouts)

// GET a single workouts
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a workput
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)


module.exports = router