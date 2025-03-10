let car1 = new Object();
car1.color = "black"; 
car1.maxSpeed = 200; 
car1.driver = {
    name: "Khrystyna Palii", 
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;
console.log(car1);
car1.drive = function () {
    console.log("I am not driving at night");
};
car1.drive();


let car2 = {
    color: "red", 
    maxSpeed: 350,
    driver: {
        name: "Mikhael Shumakher", 
        category: "B",
        personalLimitations: null 
    },
    tuning: false,
    numberOfAccidents: 1
};

console.log(car2);

car2.drive = function () {
    console.log("I can drive anytime");
};
car2.drive();


