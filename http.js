const http = require('http');
const server = http.createServer((req,res)=>{
	res.writeHead(200,"Server created");
	res.end("OK");
});

server.listen(3000,()=>{
	console.log("Listening to port 3000");
});