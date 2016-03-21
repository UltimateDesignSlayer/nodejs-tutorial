/** Read file synchronous way **/
var fs = require('fs'); //FS - file system package in node

var data = fs.readFile('hi.txt', function(e, data){
	if (e){
		return console.error(e);
	}
	
	console.log(data.toString());
}); 
//read data in file using fs - THIS IS THE ASYNCHRONOUS WAY
//Callback params (error if one occurs, data from file) 

console.log('End file read'); 
// indicate file's been read. In this async case, this might appear before the file text. 