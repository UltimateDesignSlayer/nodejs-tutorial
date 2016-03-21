/** Read file synchronous way **/
var fs = require('fs'); //FS - file system package in node

var data = fs.readFileSync('hi.txt'); //read data in file using fs - THIS IS THE SYNCHRONOUS WAY

console.log(data.toString()); // print file contents to console as string.

console.log('End file read'); // indicate file's been read.