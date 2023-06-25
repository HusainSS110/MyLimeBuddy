const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3000; // Replace with your desired port number

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle user messages
  socket.on('message', (message) => {
    // Process the message and generate chatbot response
    const chatbotResponse = 'This is a sample response from the chatbot.';

    // Emit the response back to the client
    socket.emit('message', { sender: 'chatbot', message: chatbotResponse });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});