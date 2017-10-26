
function Game () {
    this.board = '';
    this.playerOne = '';
    this.playerTwo = '';

}

Game.prototype.getBoardArray = function () {
    return this.board.map((item)=> item.trim().split("\n").map(row => row.trim()).join('')).join('');
};

 


Game.prototype.getWinner = function () {
//    let boardString = this.getBoardArray();
//    console.log(boardString);
// --o-o-o--    ooo------  ---ooo---  ------ooo  o---o---o    
    if(this.getBoardArray() == "---------") return 0;
    if(this.getBoardArray() == 'x---x---x') return 1;
    if(this.getBoardArray() == '--o-o-o--ooo---------ooo---------oooo---o---o') return 2;
    
};

module.exports = Game;
