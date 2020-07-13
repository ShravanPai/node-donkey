
class Player {
    // @param {string} name
    constructor(name) {
        this.name = name;
        this.cards = [];            // Contains the cards that this player has. Of the type Card
    }

    // @param {Card} card
    addCard(card) {
        if (!card) {
            console.log('Cannot add a ' + card + ' to player ' + this.name);
            return;
        }

        this.cards.push(card)
    }

    /**
     * 
     * @param {Card} card 
     * @returns Card if exists, null otherwise
     */
    getCard(card) {
        for (var cardIndex in this.cards) {
            let currentCard = this.cards[cardIndex];
            if ((currentCard.getType() === card.getType()) && (currentCard.getValue() === card.getValue())) {
                this.cards = this.cards.splice(cardIndex, 1);
                return currentCard;
            }
        }

        return null;
    }

    getName() {
        return this.name;
    }
}

module.exports = Player;