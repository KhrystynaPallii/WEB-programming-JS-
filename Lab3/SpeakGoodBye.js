var speakGoodbye = (function () {
    var speakWord = "Goodbye";
    return function (name) {
        console.log(speakWord + " " + name);
    };
})();
