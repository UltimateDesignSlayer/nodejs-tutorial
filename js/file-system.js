/** 
	Node File System Module 
	http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
**/
var fs = require('fs');

fs.open('txts/zipthis.txt', 'r+', function(e,data){
	if(e){
		return console.error(e);		
	}
	
	console.log('Open complete');
});

fs.stat('txts/readfromhere.txt', function(e, statsData){
	console.log('This is a file - ' + statsData.isFile());
	console.log('This is a directory - ' + statsData.isDirectory());
});