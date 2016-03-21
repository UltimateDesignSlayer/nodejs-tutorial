/**** Module Pattern ***/
var programOne = (function(){
	var test = "programOne -- HEllo";
	console.log(test);
	
	return{
		accessibleOutside : "programOne -- Outside :: " + test
	}
})();

console.log(programOne.accessibleOutside);



/*** Revealing Module Pattern ****/
var program = (function(){

	var methodOne = function(){
		//Private
		var test = 'yeah'
		console.log(test);
	}
	
	var methodTwo = function(){
		//Private
		var test = 'yeah2'
		console.log(test);
	}
	
	return {
		// Public - everything in the return object can be accessed from outside
		testPublic: methodOne,
		testTwo: methodTwo
	}
})();

program.testPublic();
program.testTwo();
