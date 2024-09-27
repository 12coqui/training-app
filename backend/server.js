require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./Routes/trainingRoutes');

app.use(express.json());
app.use(router);
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		const PORT = process.env.PORT || 3000;
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
		console.log('Connected to MongoDB');
	})
	.catch(err => {
		console.log(err);
	});
