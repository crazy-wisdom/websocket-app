const WebSocket = require('ws');


exports.start = function(app) {
  const socketServer = new WebSocket.Server({port: 3030});
  socketServer.on('connection', (socketClient) => {
    console.log('connected');
    console.log('client Set length: ', socketServer.clients.size);
    socketClient.on('close', (socketClient) => {
      console.log('closed');
      console.log('Number of clients: ', socketServer.clients.size);
    });
  });

  setInterval(() => {
    socketServer.clients.forEach((client) => {
      if (app.locals.messages.length > 0) {
        client.send(app.locals.messages[app.locals.messages.length - 1]);
      }
    });
  }, 1000);
};
