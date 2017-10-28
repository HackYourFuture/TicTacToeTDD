const PlayerOneSymbol = 'x';
const PlayerTwoSymbol = 'o';
const EmptyBoardSymbol = '-';

const BoardEmpty = `
---
---
---
`;

const BoardPlayerOneWins1 = `
x--
-x-
--x
`;
const BoardPlayerOneWins2 = `
xxx
---
---
`;
const BoardPlayerOneWins3 = `
-x-
-x-
-x-
`;
const BoardPlayerOneWins4 = `
x-x
-xx
--x
`;

const BoardPlayerTwoWins1 = `
xxo
-ox
o--
`;
const BoardPlayerTwoWins2 = `
oxo
oox
oxx
`;
const BoardPlayerTwoWins3 = `
-xo
xxo
o-o
`;
const BoardPlayerTwoWins4 = `
-xx
xox
ooo
`;

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
	
	it('Should have two player', () => {
		expect(currentGame.playerTwo).toBeDefined();
		
	});
	
	it('Should have a function to determinate winner', () => {
		expect(currentGame.getWinner).toBeDefined();
		
	});
	
	
	
});

describe('Game should be able to validata a sting board', () => {
	let currentGame;
	beforeEach(() => {
		currentGame = new Game;
		currentGame.playerOne = PlayerOneSymbol
		currentGame.playerTwo = PlayerTwoSymbol
	});
	
	it('Should validata player one winner given a certatain board', () => {
		currentGame.board = BoardPlayerOneWins1;
		expect(currentGame.getWinner()).toBe(1);
	
    });
	it('Should validata player one winner given a certatain board', () => {
		currentGame.board = BoardPlayerOneWins2;
		expect(currentGame.getWinner()).toBe(1);
	
    });
	it('Should validata player one winner given a certatain board', () => {
		currentGame.board = BoardPlayerOneWins3;
		expect(currentGame.getWinner()).toBe(1);
	
    });
	it('Should validata player one winner given a certatain board', () => {
		currentGame.board = BoardPlayerOneWins4;
		expect(currentGame.getWinner()).toBe(1);
	
    });
	
	it('Should validata player two winner given a certatain board', () => {
		currentGame.board = BoardPlayerTwoWins1;
		expect(currentGame.getWinner()).toBe(2);
	
    });
	it('Should validata player two winner given a certatain board', () => {
		currentGame.board = BoardPlayerTwoWins2;
		expect(currentGame.getWinner()).toBe(2);
	
    });
	it('Should validata player two winner given a certatain board', () => {
		currentGame.board = BoardPlayerTwoWins3;
		expect(currentGame.getWinner()).toBe(2);
	
    });
	it('Should validata player two winner given a certatain board', () => {
		currentGame.board = BoardPlayerTwoWins4;
		expect(currentGame.getWinner()).toBe(2);
	
    });
	
});