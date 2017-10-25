const PlayerOneSymbol = 'x';
const PlayerTwoSymbol = 'o';
const EmptySymbol = '-';

const EmptyBoard = `
---
---
---
`;
const BoardPlayerOneWins = [
    `
        --x
        -x-
        x--
    `,
    `
       xxx
       ---
       ---
    `,
    `
       ---
       xxx
       ---
    `,
    `
       ---
       ---
       xxx
    `,
    `
       x--
       -x-
       --x
    `
];

const BoardPlayerTwoWins = [
    `
        --o
        -o-
        o--
    `,
    `
       ooo
       ---
       ---
    `,
    `
       ---
       ooo
       ---
    `,
    `
       ---
       ---
       ooo
    `,
    `
       o--
       -o-
       --o
    `
];

const game = require('./game');

describe("Tic Tac Toe Game", () => {

     let currentGame;
     beforeEach(() => {
          currentGame = new game;
     });

     it('Should create a game', () => {
          expect(currentGame instanceof game).toBe(true);
     });

     it('Should have a board', () => {
          let currentGame = new game;
          expect(currentGame.board).toBeDefined();

     });

     it('Should have one player', () => {
          expect(currentGame.playerOne).toBeDefined();
     });

     it('Should have two player', () => {
          expect(currentGame.playerTwo).toBeDefined();
     });
     it('Should have a function to determinate a winner', () => {
          expect(currentGame.getWinner).toBeDefined();
     });

});

describe('Game should be able to validate a string board', () => {
     let currentGame;
     beforeEach(() => {
          currentGame = new game;


     });
     it('Should validate player one wiwnner given a certain board', () => {
          currentGame.board = BoardPlayerOneWins;
          expect(currentGame.getWinner()).toBe(1);
     });
     it('Should validate player two wiwnner given a certain board', () => {
          currentGame.board = BoardPlayerTwoWins;
          expect(currentGame.getWinner()).toBe(2);
     });


});
describe('Game board is empty', () => {
     let currentGame;
     beforeEach(() => {
          currentGame = new game;
     });
     it('Should have empty board', () => {
          currentGame.board = EmptyBoard;
          expect(currentGame.getGameBoard()).toBe(null);
     });
})
