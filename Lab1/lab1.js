console.log("Використання: triangle(value1, type1, value2, type2)\nДе type: 'leg' (катет), 'hypotenuse' (гіпотенуза), 'adjacent angle' (прилеглий кут), 'opposite angle' (протилежний кут), 'angle' (гострий кут)");
function triangle(value1, type1, value2, type2) {
    
    if (value1 <= 0 || value2 <= 0) {
        console.log("Помилка: Значення повинні бути додатними.");
        console.log("failed");
        return "failed";
    }
    
    let a, b, c, alpha, beta;
    const toRadians = (deg) => deg * Math.PI / 180;
    const toDegrees = (rad) => rad * 180 / Math.PI;
    
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Помилка: Невірні типи введених параметрів.");
        console.log("failed");
        return "failed";
    }
    
    switch (true) {
        case type1 === "leg" && type2 === "leg":
            a = value1;
            b = value2;
            c = Math.sqrt(a ** 2 + b ** 2);
            alpha = toDegrees(Math.asin(a / c));
            beta = 90 - alpha;
            break;
        case type1 === "leg" && type2 === "hypotenuse":
        case type1 === "hypotenuse" && type2 === "leg":
            [a, c] = type1 === "leg" ? [value1, value2] : [value2, value1];
            if (a >= c) {
                console.log("Помилка: Катет не може бути більше або рівний гіпотенузі.");
                console.log("failed");
                return "failed";
            }
            b = Math.sqrt(c ** 2 - a ** 2);
            alpha = toDegrees(Math.asin(a / c));
            beta = 90 - alpha;
            break;
        case type1 === "leg" && type2.includes("angle"):
        case type2 === "leg" && type1.includes("angle"):
            [a, alpha] = type1 === "leg" ? [value1, value2] : [value2, value1];
            if (alpha <= 0 || alpha >= 90) {
                console.log("Помилка: Кут повинен бути гострим (від 0° до 90°).");
                console.log("failed");
                return "failed";
            }
            beta = 90 - alpha;
            c = a / (type1.includes("opposite") || type2.includes("opposite") ? Math.sin(toRadians(alpha)) : Math.cos(toRadians(alpha)));
            b = Math.sqrt(c ** 2 - a ** 2);
            break;
        case type1 === "hypotenuse" && type2 === "angle":
        case type2 === "hypotenuse" && type1 === "angle":
            [c, alpha] = type1 === "hypotenuse" ? [value1, value2] : [value2, value1];
            if (alpha <= 0 || alpha >= 90) {
                console.log("Помилка: Кут повинен бути гострим (від 0° до 90°).");
                console.log("failed");
                return "failed";
            }
            beta = 90 - alpha;
            a = c * Math.sin(toRadians(alpha));
            b = c * Math.cos(toRadians(alpha));
            break;
        default:
            console.log("Помилка: Невірні типи введених параметрів.");
            console.log("failed");
            return "failed";
    }
    
    
    console.log(`a = ${a.toFixed(7)}, b = ${b.toFixed(7)}, c = ${c.toFixed(7)}, alpha = ${alpha.toFixed(7)}°, beta = ${beta.toFixed(7)}°`);
    console.log("succes");
    return "success";
}

triangle(3, "leg", 4, "leg"); 
triangle(5, "hypotenuse", 30, "angle"); 
triangle(6, "leg", 45, "opposite angle"); 
triangle(6, "leg", 45, "adjacent angle");
triangle(6, "leg", 10, "hypotenuse");
triangle(6, "leg", 1, "hypotenuse");
