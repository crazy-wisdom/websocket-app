const WebSocket = require('ws');


exports.connect = function() {
  const socketServer = new WebSocket.Server({port: 3030});
  socketServer.on('connection', (socketClient) => {
    console.log('connected');
    console.log('client Set length: ', socketServer.clients.size);
    socketClient.on('close', (socketClient) => {
      console.log('closed');
      console.log('Number of clients: ', socketServer.clients.size);
    });
  });

  return socketServer;
};


exports.send = function(app, socketServer) {
  const talks = app.locals.talks.sort(function(a, b) {
    return parseInt(b.rank) - parseInt(a.rank);
  });

  // console.log(talks);

  socketServer.clients.forEach((client) => {
    const talkCount = talks.length;
    if (talkCount > 0) {
      // Conver array to json
      // We can use ArrayBuffer instead here too.
      const talkData = {
        talks: talks
      }
      console.log(talkData);
      client.send(JSON.stringify(talkData));
    } else {
      console.log('There are no talks now.');
    }
  });
}
