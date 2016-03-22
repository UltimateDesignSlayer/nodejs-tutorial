/**
	http://www.tutorialspoint.com/nodejs/nodejs_streams.htm
	
	Streams are objects that let you read data from a source, or write to a destination in
	continuous fashion.
	
**/

var fs = require('fs'); //Import file system module;
var data = '';

//Create readable stream.
var readStream = fs.createReadStream('hi.txt');
readStream.setEncoding('UTF8');

//data event is fired when there is data to be read.
readStream.on('data', function(dataChunk){
	console.log(dataChunk);
	data += dataChunk; 
	
	/**
		IMPORATANT: The reason we use += here is because in long pieces of data, the 
		data is passed through in chunks. So we build up the data in our 'data' variable.
		Every time we loop around and add the next chunk of data in, because as long as 
		there is data in the source, the event 'data' will fire and this will execute.
	**/
});

//end event fires when theres nothing left to read in source of data.
readStream.on('end', function(){
	console.log('End event fired. Means no more data to read. Lets see what we have :: ' + data);
});