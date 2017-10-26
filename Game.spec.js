const PlayerOneSymbol = 'x';
const PlayerTwoSymbol = 'o';
const EmptySymbol = '-';

const BoardEmpty = [`
 ---
 ---
 ---
`];

const BoardPlayerOneWins = [`
 x--
 -x-
 --x
`]; 

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

const Game = require('./Game');


describe("Tic Tac Toe Game", () => {

    let currentGame;
    beforeEach(() => {
        currentGame = new Game;
    });

    it('Should create a game', () => {

        expect(currentGame instanceof Game).toBe(true);

    });

    it('Should have a board', () => {

        expect(currentGame.board).toBeDefined();

    });

    it('Should have one player', () => {

        expect(currentGame.playerOne).toBeDefined();

    });

    it('Should have two players', () => {

        expect(currentGame.playerTwo).toBeDefined();

    });

    it('Should have a function to determinate winner', () => {

        expect(currentGame.getWinner).toBeDefined();

    });

});

describe('Game should be able to validate a sting board', () => {

    let currentGame;
    beforeEach(() => {
        currentGame = new Game;
    });
    
    it('Should validate that  has no started the game ', () => {
        currentGame.board = BoardEmpty;
        expect(currentGame.getWinner()).toBe(0);
    });

    it('Should validate player one winner given a certain board', () => {
        currentGame.board = BoardPlayerOneWins;
        expect(currentGame.getWinner()).toBe(1);
    });

    it('Should validate player two winner given a certain board', () => {
        currentGame.board = BoardPlayerTwoWins;
        expect(currentGame.getWinner()).toBe(2);
    });

});
