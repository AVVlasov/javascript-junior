class Human {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.info(`hello!!, I'm ${this.name}`);
    }
}

// module.exports.Human = Human;
module.exports = Human;
