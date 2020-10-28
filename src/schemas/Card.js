const uuid = require("uuid");

module.exports = class Card {
    constructor(suit, sign, value) {
        this.suit = suit;
        this.sign = sign;
        this.value = value;
        this.uuid = uuid.v4();
    }

    compare = (b) => {
        if (!this.value || !b) {
            return false;
        }

        if (this.value > b.value) {
            return true;
        }

        return false;
    };
};
