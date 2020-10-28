const Card = require("./Card");

module.exports = class Deck {
    constructor() {
        this.cards = [];
    }

    Generate = () => {
        let suits = ["heart", "diamond", "club", "spade"];
        let signs = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];

        // Generate higher cards
        for (let i = 0; i < signs.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                this.cards.push(new Card(suits[j], signs[i], i));
            }
        }

        return true;
    };

    DrawCards = (n) => {
        const pickedCards = [];

        if (!this.cards || this.cards.length <= 0) {
            return false;
        }

        for (let i = 0; i < n; i++) {
            let randomCardIndex = Math.floor(
                Math.random() * this.cards.length + 1
            );
            let randomCard = this.cards[randomCardIndex];

            this.cards = this.cards.filter((card) => card !== randomCard);

            pickedCards.push(randomCard);
        }

        return pickedCards;
    };
};
