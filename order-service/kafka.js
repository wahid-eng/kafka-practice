const { Kafka } = require('kafkajs');

const kafka = new Kafka({
	clientId: 'order-service',
	brokers: ['localhost:29092'],
});

const producer = kafka.producer();

const runProducer = async () => {
	await producer.connect();
	console.log('Kafka: Order producer connected');
};

module.exports = {
	producer,
	runProducer,
};
