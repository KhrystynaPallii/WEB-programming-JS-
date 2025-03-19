(function () {
    const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
    const names2 = ["Khrystyna", "Yurii", "Maria", "Daryna", "Pavlo", "Oleksandra", "Oleg", "Samanta", "Teo", "Nataliya", "Bim"];
    function processNames(nameArray) {
        nameArray.forEach(name => {
            if (name.charAt(0).toLowerCase() === 'j') {
                speakGoodbye(name);
            } else {
                speakHello(name);
            }
        });
    }

    console.log("-Виконання основного завдання-");
    processNames(names);
    function select_ASCII_sum(name_array, some_number) {
        console.log("-Додатковий метод селекції за порівнням суми ASCII-кодів та вибіркового значення-");
        name_array.forEach(name => {
            let ASCIIsum = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
            if (ASCIIsum > some_number) {
                speakGoodbye(name);
                console.log(`ASCII Sum: ${ASCIIsum} (ASCII Sum > Number)`);
            } else {
                speakHello(name);
                console.log(`ASCII Sum: ${ASCIIsum} (ASCII Sum < Number)`);
            }
        });
    }

    select_ASCII_sum(names2, 500); 
})();

