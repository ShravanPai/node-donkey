class Card {
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }

    toString() {
        return this.value + ' Of ' + this.type;
    }
}

module.exports = Card;