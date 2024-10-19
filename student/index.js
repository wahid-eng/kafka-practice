const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'Hello from student' });
});

app.get('/send', (req, res) => {
	res.json({ message: 'student' });
});

app.listen(3009, () => console.log('Student listenting at port 3009'));
