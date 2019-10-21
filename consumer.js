const amqp = require('amqplib');
const connect = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("job");

    channel.consume("job", message => {
      const input = JSON.parse(message.content.toString());
      console.log(`message: ${input.number}`);

      if (input.number == 9) {
        channel.ack(message);
      }
    });

    console.log("waiting for messages...");
  }
  catch(ex) {
    console.log(ex);
  }
}

connect();