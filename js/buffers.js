/**
	Buffer is used to read/manipulate binary data. This is useful for 
	TCP streams and file system operations.
	
	Pure JavaScript is Unicode friendly but not nice to binary data.
	
	The Buffer class provides instances to store RAW DATA similar to an 
	array of integers but corresponds to a raw memory allocation outside 
	the V8 heap.
	
	See here:
	https://nodejs.org/api/buffer.html#buffer_buffer
	
	and here: 
	http://www.tutorialspoint.com/nodejs/nodejs_buffers.htm
	
	Various ways to construct buffers:
**/

var buf = new Buffer(10); //Buffer of 10 octets
var buflength = buf.write('Hello122291Hello122291Hello122291Hello122291Hello122291');
console.log(buflength); //this will output 10 as this is the max allowed by buffer. (10 octets)

var buf2 = new Buffer('test');
console.log(buf2); // creates a buffer containing ASCII bytes [74, 65, 73, 74]

var buf3 = new Buffer("This is a test. NodeJS. Hello!", "utf-8");
console.log(buf3); //creates a buffer containing UTF8 bytes [53 69 6d 70 6c 79 20 45 61 73 79 20 4c 65 61 72 6e 69 6e 67] 
// Encodings available: "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex"

/**
	This is raw data which can be used to reassemble the data.
	
	Used to write into Buffer:
	buf.write(string[, offset][, length][, encoding])
	
	string - This is string data to be written to buffer.
	offset - This is the index of the buffer to start writing at (eg position 1 in 
			"hello" would start at "e"). Default value is 0.
	length - This is the number of bytes to write. Defaults to buffer.length. Can default 
			to whatever length initially set 
			
			e.g. var buf = new Buffer(10)  <-- 10 would be default 
			
	encoding - Encoding to use. 'utf8' is the default encoding. "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex"
	
**/

//Reading from buffers - buf3.toString(encoding, start position, end position)
console.log("Reading buffer :: " + buf3.toString('utf-8'));

/**
	Many other Buffer manipulation stuff here:: http://www.tutorialspoint.com/nodejs/nodejs_buffers.htm
	
	* Slice
	* Concatinate
	* Compare
	* Copy
	* Length
	etc.....
	
**/