class Card {
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }

    toString() {
        return this.value + ' Of ' + this.type;
    }

    getType() {
        return this.type;
    }

    getValue() {
        return this.value;
    }
}

module.exports = Card;