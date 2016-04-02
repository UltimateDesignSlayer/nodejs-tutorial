/**
	We're creating a server below to return pages to the end user.
	http://www.tutorialspoint.com/nodejs/nodejs_web_module.htm
**/

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
	console.log('URL requested :: ' + request.url);
	
	var pathname = url.parse(request.url).pathname;
	
	if(pathname === '/'){
		console.log('Homepage requested');
		pathname = '/index.html';
	}
	
	fs.readFile(pathname.substr(1), function(e, data){
		if(e){
			console.log('Problem finding ' + pathname);
			console.log(e.stack);
		}
		else{
			response.writeHead(200); 
			response.write(data.toString());
		}
		
		response.end(); //This is required as this sends the response to client.
	});
	
	
}).listen(1234) //tells us which port we're listening to 

console.log('Server started');