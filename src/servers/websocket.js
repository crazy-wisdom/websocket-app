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
      const talkCount = app.locals.talks.length;
      if (talkCount > 0) {
        // Conver array to json
        // We can use ArrayBuffer instead here too.
        const talkData = {};
        for (var i = talkCount; i >= 0; i--) {
          talkData[i] = app.locals.talks[i];
        }

        console.log('Client would receive: ')
        console.log(talkData);
        client.send(JSON.stringify(talkData));
      }
    });
  }, 2000);
};
