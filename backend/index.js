const express =require('express')
const http = require('http')
const {Server} = require('socket.io')
const app=express()
const dotenv=require('dotenv')
const cors =require("cors");
const { Socket } = require('socket.io-client');
app.use(cors());
const server =http.createServer(app)
var val=null;
const io =new Server(server,{
    cors:{
        origin:"*"
    },
});
io.on("connection",(socket)=>{
    socket.on('code',(data)=>{
      socket.join(data);
      socket.on("send_message",(data1)=>{
        socket.to(data).emit("receive_message",data1)
    });
    socket.on("send",(data1)=>{
      socket.to(data).emit("receive",data1)
  });
    });
  });
const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Listening on port ${port}`));