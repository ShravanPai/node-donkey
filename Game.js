var Constants = require('./Constants');
var Card = require('./Card');
const Player = require('./Player');

class Game {
    constructor(gameHost, ipAddress) {
        this.gameHost = gameHost;
        this.playerInfo = {ipAddress: new Player(gameHost)};
        this.cardsInDeck = [];
        this.cardsOnTable = [];
    }

    /**
     * 
     * @param {string} playerName 
     * @param {string} ipAddress 
     * @throws Error if the player with a particular IP address already exists
     */
    addPlayer(playerName, ipAddress) {
        if (!ipAddress in this.playerInfo) {
            throw new Error('A player with the IP address ' + ipAddress + ' already exists as ' + this.playerInfo[ipAddress].getName())
        }

        this.playerInfo[ipAddress] = new Player(playerName);
    }

    initializeGame() {
        for (var cardType in Constants.CARD_TYPES)
            for (var j = 0; j < Constants.NUM_OF_CARDS_PER_TYPE; j++)
                this.cardsInDeck.push(new Card((j + 1), cardType));
    
        // TODO: Add cards distribution logic here
        console.log('Game initialized');
    }

    /**
     * 
     * @param {string} ipAddress 
     * @returns Player object for this ipAddress
     */
    getPlayerForIP(ipAddress) {
        return this.playerInfo[ipAddress];
    }
}

module.exports = Game;
 



