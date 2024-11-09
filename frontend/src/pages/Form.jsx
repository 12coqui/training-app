import React from 'react';
import { useState } from 'react';
import NewExercise from '../components/NewExercise';

function Form() {
	const [exercises, setExercises] = useState([]);
	const [exercise, setExercise] = useState({});
	const [duration, setDuration] = useState(0);

	function addExercise(newExercise) {
		setExercise(newExercise);
		console.log(newExercise);
		setExercises(prev => [...prev, exercise]);
		setExercise({});
	}

	function updateDuration(e) {
		const { value } = e.target;
		setDuration(value);
	}

	function onSubmit(e) {
		e.preventDefault();
		console.log({ exercises, totalDuration: duration });
	}

	return (
		<div className='wrapper'>
			<h3>Form</h3>
			<form onSubmit={onSubmit}>
				<NewExercise addExercise={addExercise} />
				<div className='form-group'>
					<label htmlFor='total-duration'>Total Duration</label>
					<input
						type='text'
						inputMode='numeric'
						id='total-duration'
						name='total-duration'
						value={duration}
						onChange={updateDuration}
					/>
				</div>
				<div className='form-group'>
					<button type='submit'>Save</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
