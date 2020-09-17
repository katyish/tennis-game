const Player = require('./player')

class TennisGame {

  constructor(p1, p2) {
    this.player1 = new Player(p1)
    this.player2 = new Player(p2)
    this.winner = null
  }

  getScore() {
    if (this.hasWinner()) {
      return "Game over"
    }
    else {
      return `${this.player1.name} ${this.player1.getScore()} - ${this.player2.getScore()} ${this.player2.name}`
    }
  }

  addPoint(name) {
    // lookup player
    let player, opponent
    if (name === this.player1.name) {
      // we're dealing with player 1
      player = this.player1
      opponent = this.player2
    } else if (name === this.player2.name){
      // we have player 2
      player = this.player2
      opponent = this.player1
    } else {
      throw new Error('Player not found')
    }

    if (player.getScore() === '40' && opponent.getScore() === 'A') {
      opponent.removePoint() // back to deuce
    }
    else {
      player.addPoint()
    }
  }

  hasWinner() {
    // do we have a winner?
    return(this.player1.isWinner() || this.player2.isWinner())
  }

  isDeuce() {
    return (this.player1.getScore() === '40' && this.player2.getScore() === '40')
  }
}

module.exports = TennisGame
