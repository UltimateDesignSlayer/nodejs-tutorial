var events = require('events'); // Import events module

//EventEmitter class is used to bind events and event listeners.
var ee = new events.EventEmitter(); //instance of EventEmitter.

/**
	Example of how we bind events to event handler:
	ee.on('eventName', eventHandlerCallback);
	
	Example of how we can fire an event to trigger the above:
	ee.emit('eventName');
	
	"eventName" in the examples above can be anything to identify the event. 
	E.g. we can fire:
		ee.emit('testDone'); 
	at the end of a function and this will be picked up by:
		ee.on('testDone', function(){ console.log( 'Test is done.' ); }); 
	which will console log out "Test is done".
**/


/*** 
	Bind events to event handlers 
	Event Loop in node is constantly looping through to see if event has occurred.
***/
//Listen for start_load event (2)
ee.on('start_load', function(){ 
	//event handler
	console.log('Data load started'); 
	dataLoader(); //execute dataLoader function (3)
});

//Listen for data_loaded event 
ee.on('data_loaded', function(){
	//event handler 
	console.log('Data load complete'); // Done (5)
});


/*** Event handler to run ***/
var dataLoader = function(){
	console.log('Loaded.');
	ee.emit('data_loaded'); //Fire event called data_loaded (4)
}

ee.emit('start_load'); //Fire event called start_load to start off the process (order of process: 1)