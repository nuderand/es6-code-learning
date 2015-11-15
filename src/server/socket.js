import socket from 'socket.io';
import request from 'superagent';

const io = socket(8000);

io.on('connection', (socket) => {
  console.log('connect');

  const tweets = setInterval(() => {
    api((users) => {
      socket.volatile.emit('news', users);
     });
   }, 3000);

  socket.on('users', () => {
    console.log('users');
    tweets;
  });

  socket.on('stopNews', () => {
    console.log('stop Users news')
    clearInterval(tweets);
  });

  socket.on('disconnect', () => {
    clearInterval(tweets);
  });
});

function api(callback) {
  request
    .get('http://localhost:3000/api/users')
    .end(function (err, res) {
      console.log(res.text);
      callback(res.text);
    });
}

console.log("Websocket server is running")
