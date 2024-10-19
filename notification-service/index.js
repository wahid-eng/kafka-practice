const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.post('/notifications', (req, res) => {
	res.json({ message: 'Notification has created' });
});

app.listen(3001, () =>
	console.log('Notification service listening at port: 3001')
);
