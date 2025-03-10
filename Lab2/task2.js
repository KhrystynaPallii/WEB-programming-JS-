function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

let truck1 = new Truck("white", 6000, 90.5, "Audi", "A6");
let truck2 = new Truck("black", 6400, 80.2, "Skoda", "FL");

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

truck1.AssignDriver("Khrystyna Palii", true, 2);  
truck2.AssignDriver("Palii Khrystyna", false, 3); 

console.log(truck1);
console.log(truck2);

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
        return;
    }
    let nightDrivingText = this.driver.nightDriving ? "drives at night" : "does not drive at night";
    console.log(`Driver ${this.driver.name} ${nightDrivingText} and has ${this.driver.experience} years of experience.`);
};

truck1.trip(); 
truck2.trip(); 

let truck3 = new Truck("gray", 8000, 94.7, "BMW", "X5"); 
truck3.trip();  
