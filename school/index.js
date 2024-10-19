const express = require('express');
const morgan = require('morgan');
const { Kafka } = require('kafkajs');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'Hello from school' });
});

app.get('/send', (req, res) => {
	res.json({ message: 'school' });
});

app.listen(3005, () => console.log('School listenting at port 3005'));
