module.exports.numberOfGreetings = 0;
module.exports.makeGreeting = function (person) {
    return this.numberOfGreetings++, `why hello ${person}`;
};
