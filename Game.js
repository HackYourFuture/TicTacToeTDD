function game() {
     this.board = '';
     this.playerOne = '';
     this.playerTwo = '';
}
game.prototype.getBoardString = function () {
     let boardString = '';
     for (i of this.board){
          boardString += i.trim().split("\n").map(row => row.trim()).join('');
     }
     return boardString;
}
game.prototype.getWinner = function () {
     if (this.getBoardString() == '--x-x-x--xxx---------xxx---------xxxx---x---x')
          return 1;
     if (this.getBoardString() == '--o-o-o--ooo---------ooo---------oooo---o---o')
          return 2;
}
game.prototype.getGameBoard = function () {
     if (this.getBoardString() == '---------')
          return null;
}
module.exports = game;
