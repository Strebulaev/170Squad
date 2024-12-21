const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Настройка CORS
app.use(cors({
  origin: ['http://localhost:53276'], // Замените на URL вашего клиентского приложения
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Обработка подключений клиентов
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('send-message', (message) => {
    // ...
    socket.emit('new-message', newMessage);
    socket.broadcast.emit('new-message', newMessage);
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });

  // Добавьте этот код для настройки CORS
  socket.on('handshake', () => {
    socket.emit('handshake-response', {
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
  });
});

server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
