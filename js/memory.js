class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    } else {
      this.cards = this.cards.sort(() => Math.random() - 0.5);
      return this.cards;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    let totalPairs = this.cards.length / 2;
    if (totalPairs === this.pairsGuessed) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
