# rabbitmq-node-sample01

Before run this code, you need:

1 - Install Docker: https://www.docker.com/

2 - Run: `docker run --name rabbitmq -p 5672:5672 rabbitmq`

Add message in queue: `yarn publisher 12`

Read message from queue: `yarn consumer`

Enjoy!
