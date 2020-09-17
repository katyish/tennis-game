# Tennis Game

Models the scoring of an individual game of tennis.

## Scoring rules:

1. Each player can have either of these points in one game: 0, 15, 30, 40, A.
2. If one player has 40, and her opponent has less than 40, and she wins the next point, she wins the game.
3. If both players reach 40 the game is in 'Deuce'.
4. If the game is in Deuce, the winner of the next point has 'Advantage' (A).
5. If the player with A wins the point she wins the game.
6. If the player without A wins the point the game goes back to Deuce.

## Unit tests

This module has full test coverage.

* To run unit tests: `npm test`
* For coverage: `npm run coverage`
