import React from 'react';
import { useState, useId } from 'react';

function NewExercise({ addExercise }) {
	const [type, setType] = useState('');
	const [name, setName] = useState('');
	const [reps, setReps] = useState('');
	const [sets, setSets] = useState('');
	const [weight, setWeight] = useState('');
	const [duration, setDuration] = useState(0);

	function handleClick() {
		const exercise = { type, name, reps, sets, weight, duration };
		addExercise(exercise);
		setType('');
		setName('');
		setReps('');
		setSets('');
		setWeight('');
		setDuration(0);
	}

	const exerciseId = useId();

	return (
		<>
			<div className='form-group'>
				<label htmlFor='exercise-type'>Type</label>
				<input
					type='text'
					id='exercise-type'
					name='type'
					value={type}
					onChange={e => setType(e.target.value)}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='exercise-name'>Name</label>
				<input
					type='text'
					id='exercise-name'
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='exercise-reps'>Reps</label>
				<input
					type='text'
					id='exercise-reps'
					name='reps'
					value={reps}
					onChange={e => setReps(e.target.value)}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='exercise-sets'>Sets</label>
				<input
					type='text'
					id='exercise-sets'
					name='sets'
					value={sets}
					onChange={e => setSets(e.target.value)}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='exercise-weight'>Weight</label>
				<input
					type='text'
					id='exercise-weight'
					name='weight'
					value={weight}
					onChange={e => setWeight(e.value)}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='exercise-duration'>Duration</label>
				<input
					type='text'
					id='exercise-duration'
					name='duration'
					value={duration}
					onChange={e => setDuration(e.value)}
					required
				/>
			</div>
			<div className='form-group'>
				<button type='button' className='add-exercise' onClick={handleClick}>
					Add exercise
				</button>
			</div>
		</>
	);
}

export default NewExercise;
