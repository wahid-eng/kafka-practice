const express = require('express');
const morgan = require('morgan');
const { producer, runProducer } = require('./kafka');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.post('/orders', async (req, res) => {
	const order = { ...req.body, id: Date.now() };
	await producer.send({
		topic: 'order-created',
		messages: [{ value: JSON.stringify(order) }],
	});
	console.log('Order sent to Kafka:', order);

	return res.json({ message: 'Order has created', order });
});

app.listen(3000, () => {
	runProducer().catch(console.error);
	console.log('Order service listening at port: 3000');
});
