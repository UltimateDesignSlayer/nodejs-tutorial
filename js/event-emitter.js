/**
	Many objects in Node emit events. 
	Example:
	* fs.readStream emits an event when the file specified is opened.
	* net.Server emits an event when a client connects to it.
	
	For more see here: http://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm
**/

var events = require('events');
var ee = new events.EventEmitter();

var listener1 = function(){
	console.log('listen 1 fired');
	
	ee.emit('listener1Comp');
};

var listener2 = function(event, listenerFunc){
	console.log('A listener was added.');
	console.log(event);
	//listenerFunc(); //this is the callback function from newListener
};

//addListener to listen for when a new lister is added. 
//This will fire when addListener or "on" is used somewhere below. Not when emit is used.
ee.once('newListener', listener2); // Made this a "once" so it will only listen a execute once, then is unbound.

// addListener and "on" seem to be the same. Both produce bindings that can be removed using removeListener.
ee.addListener('start', listener1);

ee.on('listener1Comp', function(){
	console.log('oi');
});

//removed the added binding above
//ee.removeListener('start', listener1);

ee.emit('start');