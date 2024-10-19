const { Kafka } = require('kafkajs');

const kafka = new Kafka({
	clientId: 'notification-service',
	brokers: ['localhost:29092'],
});

const consumer = kafka.consumer({ groupId: 'notification-group' });

const runConsumer = async () => {
	await consumer.connect();
	console.log('Kafka: Notification consumer connected');

	await consumer.subscribe({ topic: 'order-created', fromBeginning: true });

	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			const order = JSON.parse(message.value.toString());
			console.log(`Notification service received order:`, order);
		},
	});
};

module.exports = {
	runConsumer,
};
