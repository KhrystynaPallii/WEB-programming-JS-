var speakHello = (function () {
    var speakWord = "Hello";
    return function (name) {
        console.log(speakWord + " " + name);
    };
})();
