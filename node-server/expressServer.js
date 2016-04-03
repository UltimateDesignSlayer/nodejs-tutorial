/***
	Setting up a server the Express way
	http://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
**/

var express = require('express');
var app = express();
var fs = require('fs');

// message below will be printed to page when homepage is requested. (/). For other pages, a 404 is sent.
app.get('/', function(request,response){
	res.send('homepage should be here'); //this message is printed to page when homepage is requested. (/)
});

var server = app.listen(1234, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('server ready :: ' + host + ':' + port);

});