import React from 'react';
import { useEffect, useState } from 'react';
function Home() {
	const [workouts, setWorkouts] = useState(null);
	useEffect(() => {
		async function getWorkouts() {
			const data = await fetch('/api/workout');
			const json = await data.json();
			return json;
		}
		async function fetchData() {
			const workouts = await getWorkouts();
			setWorkouts(workouts);
		}

		fetchData();
	}, []);

	return (
		<div>
			<h3>Home Page</h3>
			{workouts && (
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>Name</th>
							<th>Reps</th>
							<th>Sets</th>
							<th>Weight</th>
							<th>Total duration</th>
						</tr>
					</thead>
					<tbody>
						{workouts.map((workout, index) =>
							workout.exercises.map(exercise => (
								<tr key={exercise._id}>
									<td>{exercise.type.toUpperCase()}</td>
									<td>{exercise.name}</td>
									<td>{exercise.reps}</td>
									<td>{exercise.sets}</td>
									<td>{exercise.weight !== '0' ? exercise.weight + ' Kg' : ''}</td>
									<td>{workouts[index].totalDuration + ' Min'}</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default Home;
