function Triangular(a = 1, b = 2, c = 3) {
    return { a, b, c };
}
const t1 = Triangular();
const t2 = Triangular(7, 4, 9);
const t3 = Triangular(10, 14, 19);

console.log(t1);
console.log(t2);
console.log(t3);


function PiMultiplier(x) {
    return function() {
        return Math.PI * x;
    };
}

const x2 = PiMultiplier(2);
const x2_3 = PiMultiplier(2/3);
const div2 = PiMultiplier(0.5);

console.log(x2());
console.log(x2_3());
console.log(div2());


function Painter(color) {
    return function(obj) {
        if (obj.type) {
            console.log(`Колір: ${color}, Тип: ${obj.type}`);
        } else {
            console.log("No ‘type’ property occurred!");
        }
    };
}

const PaintBlue = Painter("синій");
const PaintRed = Painter("червоний");
const PaintYellow = Painter("жовтий");

const o1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const o2 = { type: "Truck", maxSpeed: 180, avgSpeed: 90, color: "purple" };
const o3 = { maxSpeed: 180, color: "purple", isCar: true };

PaintBlue(o1);
PaintRed(o2);
PaintYellow(o3);
