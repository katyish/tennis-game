const mocha = require('mocha')
const expect = require('chai').expect
const Player = require('../src/player')

describe('Setup player', () => {
  it('creates a player, with score set to 0', () => {
    const player = new Player()

    expect(player).to.not.be.null
    expect(player.name).to.be.undefined
    expect(player.getScore()).to.equal('0')
  })

  it('creates a named player with score set to 0', () => {
    const name = 'fred'

    const player = new Player(name)

    expect(player).to.not.be.null
    expect(player.name).to.equal(name)
    expect(player.getScore()).to.equal('0')
  })
})

describe('Scoring' , ()=> {
  before(() => {
    this.player = new Player('Harry')
  })
  it('returns the player score', () => {
    expect(this.player.getScore()).to.equal('0')
  })

  it('returns false when player is not the winner', () => {
    expect(this.player.isWinner()).to.be.false
  })

  it('adds a point', () => {
    this.player.addPoint()
    expect(this.player.getScore()).to.equal('15')
  })

  it('gives a score of A when a point is added to 40', () => {
    this.player.addPoint() // 30
    this.player.addPoint() // 40
    this.player.addPoint() // A
    expect(this.player.getScore()).to.equal('A')
  })

  it('marks player as winner when a point is added to advantage', () => {
    this.player.addPoint()
    expect(this.player.isWinner()).to.be.true
  })

  it('errors trying to adds points when game is over', () => {
    try {
      this.player.addPoint()
    } catch (err) {
      expect(err.message).to.equal('Game over, no points can be added')
    }
  })
})
