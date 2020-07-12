var Constants = require('./Constants');
var Card = require('./Card');

class Game {
    constructor(gameHost, ipAddress) {
        this.gameHost = gameHost;
        this.playerInfo = {ipAddress: gameHost};
        this.cardsOnDeck = [];
    }

    addPlayer(playerName, ipAddress) {
        this.playerInfo[ipAddress] = playerName;
    }

    initializeGame() {
        for (var cardType in Constants.CARD_TYPES)
            for (var j = 0; j < Constants.NUM_OF_CARDS_PER_TYPE; j++)
                this.cardsOnDeck.push(new Card((j + 1), cardType));
    
        // Print card values
        console.log('There are a total of ' + this.cardsOnDeck.length + ' cards');
        for (var cardIndex in this.cardsOnDeck)
            console.log(this.cardsOnDeck[cardIndex].toString());
    }
}

module.exports = Game;
 



