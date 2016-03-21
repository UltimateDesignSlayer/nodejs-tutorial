//Import Node HTTP module. Required to use the Node HTTP server  .
var http = require('http');

//Create server using an instance of http (created above). Then we bind it to listen to port 8081.
http.createServer(function(request, response){
	response.writeHead(200); //sends http status
	//console.log(request); //Log output the request from client side. Left commented for neatness :)
	response.end('Hello'); //.end tells the search all response data has been sent and this message is complete.
}).listen(8081);

console.log('Server running.');