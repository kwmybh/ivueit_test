import express from 'express';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json()); //Used to parse JSON bodies

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
	res.send('Hello from Homepage.');
});

app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);
