const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.post('/orders', (req, res) => {
	res.json({ message: 'Order has created' });
});

app.listen(3000, () => console.log('Order service listening at port: 3000'));
