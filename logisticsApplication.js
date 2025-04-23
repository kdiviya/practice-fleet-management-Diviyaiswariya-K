
//create a vehicle class
class Vehicle {

    // constructor should include properties: type, make, model, year and mileage.
    constructor(type, make, model, year, mileage = 0) { //default values for mileage = 0 
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this. mileage = mileage;
    }
// Increases the vehicle’s mileage by the given distance in miles using the drive().
    drive(distance){
        return this.mileage += distance;    
    }

// Returns a formatted string describing the vehicle’s details using getDetails().
    getDetails(){
        return `This vehicle is ${this.type}. It is a ${this.make} ${this.model} made in ${this.year}, and its mileage is ${this.mileage} miles.` ;
    }
}

//create three vehicle objects for the Vehicle class and pass the values to constructor().
let car = new Vehicle("Car", "Toyota", "Rav4", 2023);
let truck = new Vehicle("Truck", "Ford", "Ford Ranger", 2000, 25);
let motorcycle = new Vehicle("Motorcycle", "Honda", "Gold Wing", 2017, 14);

//Use the drive() to update the mileage
console.log(`Mileage of ${car.type}: ${car.drive(23)}`);
console.log(`Mileage of ${truck.type}: ${truck.drive(50)}`);
console.log(`Mileage of ${motorcycle.type}: ${motorcycle.drive(30)}`);

//Use the getDetails method to print each vehicle’s updated information.
console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());

/* output:
Mileage of Car: 23
Mileage of Truck: 75
Mileage of Motorcycle: 44
This vehicle is Car. It is a Toyota Rav4 made in 2023, and its mileage is 23 miles.
This vehicle is Truck. It is a Ford Ford Ranger made in 2000, and its mileage is 75 miles.
This vehicle is Motorcycle. It is a Honda Gold Wing made in 2017, and its mileage is 44 miles. */
