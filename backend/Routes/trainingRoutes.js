const express = require('express');
const router = express.Router();
const {
	getAllWorkouts,
	getWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
} = require('../Controllers/trainingController');
router.get('/', (req, res) => {
	res.send('Hello World');
});

// Get all workouts
router.get('/api/workout/', getAllWorkouts);

// Get a specific workout
router.get('/api/workout/:id', getWorkout);

// Create a new workout
router.post('/api/workout', createWorkout);

// Delete a workout
router.delete('/api/workout/:id', deleteWorkout);

// Replace a workout
router.put('/api/workout/:id', updateWorkout);

module.exports = router;
