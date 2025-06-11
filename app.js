const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const cors = require('cors');
const user = require('./src/user/user.route');
const role = require('./src/role/role.route');
const sign = require('./src/auth/checkauth.route');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST']
  }
});
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/user',user);
app.use('/role',role);
app.use('/login', sign);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);  
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
