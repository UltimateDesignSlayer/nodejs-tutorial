/***
PROTOTYPE PATTERN
***/

//constructor (class)
var PetrolCars = function(carName, wheelAmount, colour, hasAc){
	this.name = carName;
	this.noOfWheels = wheelAmount;
	this.colour = colour;
	this.ac = hasAc;
};

//prototype -- applied to all instances of PetrolCars
PetrolCars.prototype.fuel = 'petrol';

PetrolCars.prototype.started = function(){
	console.log(this.name + " started. Has " + this.noOfWheels + " wheels.");
};

var cars = [new PetrolCars('Robin', 3, 'yellow', false), new PetrolCars('Corvette', 4, 'red', true)];

var objCarsDB = {vehicles:[]};

//add to obj
(function(){
	for (i=0; i<cars.length; i++){
		objCarsDB['vehicles'].push( cars[i] );
	}
	
	objCarsDB.vehicles[0].started();
})();
