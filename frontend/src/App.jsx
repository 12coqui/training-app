import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';

import styles from './app.module.css';

function App() {
	console.log('Render App');
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
					<li>
						<Link to='/form'>Form</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/form' element={<Form />} />
			</Routes>
		</Router>
	);
}

export default App;
