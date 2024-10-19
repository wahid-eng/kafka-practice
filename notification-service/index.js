const express = require('express');
const morgan = require('morgan');
const { runConsumer } = require('./kafka');

const app = express();
app.use(morgan('dev'));

app.post('/notifications', (req, res) => {
	res.json({ message: 'Notification has created' });
});

app.listen(3001, () => {
	runConsumer().catch(console.error);
	console.log('Notification service listening at port: 3001');
});
