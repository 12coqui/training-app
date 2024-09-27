const Training = require('../Models/trainingModel');
const mongoose = require('mongoose');

async function getAllWorkouts(req, res) {
	try {
		const workouts = await Training.find();
		if (!workouts) {
			return res.status(404).json({ message: 'No workouts found' });
		}
		const data = workouts.json();
		res.status(200).json(data);
	} catch (err) {
		res.json(err.message);
	}
}

async function getWorkout(req, res) {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ message: 'Invalid workout ID' });
		}
		const workout = await Training.findById(req.params.id);
		if (!workout) {
			return res.status(404).json({ message: 'Workout not found' });
		}
		const data = workout.json();
		res.status(200).json(data);
	} catch (err) {
		res.json(err.message);
	}
}

async function createWorkout(req, res) {
	try {
		const newWorkout = await Training.create(req.body);
		const data = newWorkout.json();
		res.status(200).json(data);
	} catch (err) {
		res.json(err.message);
	}
}

async function deleteWorkout(req, res) {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ message: 'Invalid workout ID' });
		}
		const workout = await Training.deleteOne({ _id: id });
		if (!workout) {
			return res.status(404).json({ message: 'Workout not found' });
		}
		const data = workout.json();
		res.status(200).json(data);
	} catch (err) {
		res.json(err.message);
	}
}

async function updateWorkout(req, res) {
	try {
		const workoutId = req.params.id;

		if (!mongoose.Types.ObjectId.isValid(workoutId)) {
			return res.status(400).json({ message: 'Invalid workout ID' });
		}
		const updatedWorkout = req.body;

		const workout = await Training.findByIdAndUpdate(workoutId, updatedWorkout, { new: true });

		if (!workout) {
			return res.status(404).json({ message: 'Workout not found' });
		}

		res.json(workout);
	} catch (err) {
		res.status(500).json(err.message);
	}
}

module.exports = {
	getAllWorkouts,
	getWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
};