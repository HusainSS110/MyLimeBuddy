const express= require('express');
const app = express();
const { NlpManager } = require('node-nlp');
const http = require('http').createServer(app);
const manager = new NlpManager();
const io=require('socket.io')(http);
const mongoose = require('mongoose');
// const messageHandler = require('./messageHandle');

// // Use the saveMessage function from messageHandler.js
// messageHandle.saveMessage(senderId, messageContent)
//   .then(savedMessage => {
//     // Handle the saved message or perform further operations
//   })
//   .catch(error => {
//     // Handle the error
//   });

const { User, Conversation } = require('./mongodb'); // Import your schema file here

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/chatbot', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful MongoDB connection
    app.listen(3000, () => {
      console.log(`Server is running on port `);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.static(__dirname+"/public"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')

});
