//Data only has to go through constructor if it needs an Initial value.

// Master Class
class Vehicle {
	constructor(
		fuel,
		wheels,
		doors,
		transportMethod,
		fuelLevel
	) {
		this.fuel =
			fuel;
		this.wheels =
			wheels;
		this.doors =
			doors;
		this.transportMethod =
			transportMethod;
		this.fuelLevel =
			fuelLevel;
	}

	refuel() {
		// Implementation of refuel method
	}

	showVehicleSpecs() {
		return `${this.fuel} ${this.wheels} ${this.doors} ${this.transportMethod} ${this.fuelLevel}`;
	}
	// Getter and Setter for fuel
	get fuel() {
		return this
			._fuel;
	}

	set fuel(value) {
		this._fuel =
			value;
	}
}

// Inheritance 1
class Car extends Vehicle {
	constructor(
		fuel,
		wheels,
		doors,
		transportMethod,
		fuelLevel,
		handbrake,
		boot
	) {
		super(
			fuel,
			wheels,
			doors,
			transportMethod,
			fuelLevel
		);
		this.handbrake =
			handbrake;
		this.boot =
			boot;
	}
}

// Inheritance 2
class Plane extends Vehicle {
	constructor(
		fuel,
		wheels,
		doors,
		transportMethod,
		fuelLevel,
		wings,
		seats,
		airCode
	) {
		super(
			fuel,
			wheels,
			doors,
			transportMethod,
			fuelLevel
		);
		this.wings =
			wings;
		this.seats =
			seats;
		this.airCode =
			airCode;
	}
}

// Instantiate
let myCar = new Car(
	'Petrol',
	4,
	4,
	'Land',
	1,
	true,
	true
);

// Using the getter to retrieve the fuel value
console.log(
	myCar.fuel
); // Output: Petrol

// Using the setter to update the fuel value
myCar.fuel =
	'Diesel';
console.log(
	myCar.fuel
); // Output: Diesel

// Using the showVehicleSpecs method
console.log(
	myCar.showVehicleSpecs()
); // Output: Diesel 4 4 Land 1 true true
