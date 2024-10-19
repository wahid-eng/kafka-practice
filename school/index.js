const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'Hello from school' });
});

app.listen(3000, () => console.log('School listenting at port 3000'));
