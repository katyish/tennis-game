const mocha = require('mocha')
const expect = require('chai').expect
const TennisGame = require('../src/game')

describe('Initialise a game', () => {

  it('starts a new game, with score set to 0-0 and player names set', () => {
    const p1 = 'Fred'
    const p2 = 'Julie'

    const game = new TennisGame(p1, p2)

    expect(game).to.not.be.null
    expect(game.player1.name).to.equal(p1)
    expect(game.player1.getScore()).to.equal('0')
    expect(game.player2.name).to.equal(p2)
    expect(game.player2.getScore()).to.equal('0')
  })
})

describe('Scoring at start of game', () => {
  before(() => {
    // initialise a game
    this.game = new TennisGame('Fred', 'Bob')
  })

  it('prints the current score', () => {
    const score = this.game.getScore()
    expect(score).to.equal('Fred 0 - 0 Bob')
  })

  it('staes that the game has no winner', () => {
    expect(this.game.hasWinner()).to.be.false
  })

  it('describes a score of 0-0 as not deuce', () => {
    expect(this.game.isDeuce()).to.be.false
  })
})

describe('Scoring during the game', () => {
  before(() => {
    this.game = new TennisGame('Sarah', 'Mary')
  })

  it('adds to player 1 score', () => {
    this.game.addPoint('Sarah')
    expect(this.game.player1.getScore()).to.equal('15')
    expect(this.game.getScore()).to.equal('Sarah 15 - 0 Mary')
  })

  it('adds to player 2 score', () => {
    this.game.addPoint('Mary')
    expect(this.game.player1.getScore()).to.equal('15')
    expect(this.game.getScore()).to.equal('Sarah 15 - 15 Mary')
  })

  it('errors when adding points to non existent player', () => {
    try {
      this.game.addPoint('fred')
    } catch(err) {
      expect(err.message).to.equal('Player not found')
    }
  })

  it('describes a score of 40-40 as deuce', () => {
    this.game.addPoint('Sarah')
    this.game.addPoint('Mary')
    this.game.addPoint('Sarah')
    this.game.addPoint('Mary')
    expect(this.game.isDeuce()).to.be.true
  })
})

describe('Deuce/Advantage scoring', () => {
  before(() => {
    this.game = new TennisGame('Sarah', 'Mary')
    // add points to make score 40-40
    this.game.addPoint('Sarah')
    this.game.addPoint('Mary')
    this.game.addPoint('Sarah')
    this.game.addPoint('Mary')
    this.game.addPoint('Sarah')
    this.game.addPoint('Mary')

  })

  it('Sets player1 to A', () => {
    this.game.addPoint('Sarah')
    expect(this.game.getScore()).to.equal('Sarah A - 40 Mary')
  })

  it('Returns to deuce when non-Advantage player wins the next point', () => {
    this.game.addPoint('Mary')
    expect(this.game.isDeuce()).to.be.true
  })

  it('Declares a winner when Advantage player wins the next point', () => {
    this.game.addPoint('Sarah') // A
    this.game.addPoint('Sarah')

    expect(this.game.hasWinner()).to.be.true
    expect(this.game.getScore()).to.equal("Game over")
  })
})
