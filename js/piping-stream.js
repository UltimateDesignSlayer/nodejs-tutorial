/***** PIPING STREAM *****/
/**
	A better way to read from one source and write to another is using the piping method.
**/

var fs = require('fs');
/*
var streamReader = fs.createReadStream('txts/readfromhere.txt');
var streamWriter = fs.createWriteStream('txts/writetohere.txt');

streamReader.pipe(streamWriter); //Takes the read content and writes to stream writer
*/
/** Chaining Streams **/
/**
	We can chain streams, so have things happen one after the other. 
	Below you can see we read a file, create a zip, then write the file to that zip.
**/
var zlib = require('zlib');

var fileToZip = fs.createReadStream('txts/zipthis.txt');

fileToZip.pipe(zlib.createGzip()).pipe(fs.createWriteStream('txts/txtfile.gz'));

console.log('Zipped!');