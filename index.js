const express= require('express');
const app = express();
const { NlpManager } = require('node-nlp');
const http = require('http').createServer(app);
const manager = new NlpManager();
const io=require('socket.io')(http);
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017' ,{
    useNewurlparser:true,
    useUnifiedTopology:true,

});
const userProfileSchema = new mongoose.Schema({
    
})

app.use(express.static(__dirname+"/public"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')

})

http.listen(process.env.PORT || 3000,()=>{

    console.log("Port is connected");
})

io.on('connection',(socket)=>{
    console.log("connected...");
})