
function Game (){
	this.board = '';
	this.playerOne = '';
	this.playerTwo = '';
}

Game.prototype.getWinner = function (){
	if (this.isWinner(this.playerOne))	 
		return 1;
	
	if (this.isWinner(this.playerTwo))		 
		return 2;
};

Game.prototype.isWinner = function (player_symbol){
	let res = false;
	player_symbol = player_symbol.toLowerCase();
	let board_str = this.board.replace(/(\r\n|\n|\r)/gm,"").toLowerCase();
	let winning_indexes =[
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];
	winning_indexes.map(function(arr){
		if(
			board_str[arr[0]] == player_symbol 
		 && board_str[arr[1]] == player_symbol
		 && board_str[arr[2]] == player_symbol)
			res = true;
	});
	return res;
}


module.exports = Game;
