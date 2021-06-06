const http = require("http");

const server = http.createServer((req,res)=>{
     res.end('hello from the other side :');
});

server.listen(600,"127.0.0.1",() =>{
    console.log('listening to the port number 600');
});