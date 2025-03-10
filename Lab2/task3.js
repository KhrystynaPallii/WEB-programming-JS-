class Square {
    constructor(a) {
        if (a <= 0) {
            console.log("Довжина повинна бути < 0!");
            return;
        }
        this.a = a;
    }

    static help() {
        console.log("Квадрат це чотирикутник, у якого всі сторони рівні і всі кути прямі.");
    }

    length() {
        console.log(`Периметр квадрата: ${this.a * 4}`);
    }

    square() {
        console.log(`Площа квадрата: ${this.a ** 2}`);
    }

    info() {
        console.log(`Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
        console.log("Кути: 90°, 90°, 90°, 90°");
        this.length();
        this.square();
    }
}

const sq = new Square(5);
Square.help(); 
sq.info();


class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this._b = b;
    }

    static help() {
        console.log("Прямокутник має протилежні сторони рівні та кути по 90°.");
    }

    get a() {
        return this._a;
    }

    set a(value) {
        if (value > 0) this._a = value;
        else console.log("Довжина повинна бути більше 0!");
    }

    get b() {
        return this._b;
    }

    set b(value) {
        if (value > 0) this._b = value;
        else console.log("Ширина повинна бути більше 0!");
    }

    length() {
        console.log(`Периметр прямокутника: ${(this.a + this.b) * 2}`);
    }

    square() {
        console.log(`Площа прямокутника: ${this.a * this.b}`);
    }

    info() {
        console.log(`Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
        console.log("Кути: 90°, 90°, 90°, 90°");
        this.length();
        this.square();
    }
}

const rect = new Rectangle(3,8);
Rectangle.help();
rect.info();


class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        if (alpha <= 0 || alpha >= 180 || beta <= 0 || beta >= 180) {
            console.log("Некоректні кути для ромба.");
            return;
        }

        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Ромб — це паралелограм, у якого всі сторони рівні.");
    }

    square() {
        const rad = Math.PI / 180;
        console.log(`Площа ромба: ${this.a ** 2 * Math.sin(this.alpha * rad)}`);
    }

    info() {
        console.log(`Сторони: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
        console.log(`Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
        this.length();
        this.square();
    }
}

const rhombus = new Rhombus(7, 120, 60);
Rhombus.help();
rhombus.info();



class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        if (b <= 0) {
            console.log("Ширина паралелограма повинна бути більшою за 0!");
            return;
        }

        this.b = b;
    }

    static help() {
        console.log("Паралелограм — чотирикутник, протилежні сторони якого попарно паралельні, тобто лежать на паралельних прямих.");
    }

    length() {
        console.log(`Периметр паралелограма: ${(this.a + this.b) * 2}`);
    }

    square() {
        const rad = Math.PI / 180;
        console.log(`Площа паралелограма: ${this.a * this.b * Math.sin(this.alpha * rad)}`);
    }

    info() {
        console.log(`Сторони: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
        console.log(`Кути: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°`);
        this.length();
        this.square();
    }
}

const par = new Parallelogram(12, 8, 160, 20);
Parallelogram.help();
par.info();



