const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'Hello from teacher' });
});

app.listen(3001, () => console.log('Teacher listenting at port 3001'));
