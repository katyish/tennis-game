class Player {

  constructor(name) {
    this.name = name
    this.allowedScores = ['0', '15', '30', '40', 'A']
    this.score = 0
    this.winner = false
  }

  getScore() {
    return this.allowedScores[this.score]
  }

  isWinner() {
    return this.winner
  }

  addPoint() {
    if (this.isWinner()) {
      throw new Error('Game over, no points can be added')
    }
    if (this.getScore() === 'A') {
      // extra point on Advantage = winner
      this.winner = true
    }
    else {
      this.score++
    }
  }

  removePoint() {
    // only used when losing Advantage
    this.score--
  }
}

module.exports = Player
