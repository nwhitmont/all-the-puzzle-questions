var game1 = [
	'X', 'X', 'O',
	'X', 'O', 'X',
	'X', 'O', 'O'
];

// check for winner
function checkWinner(game) {
	// did X win?
	// three down
	if(game[0]==='X' && game[3]==='X' && game[6]==='X') console.log('X wins!');
	if(game[1]==='X' && game[4]==='X' && game[7]==='X') console.log('X wins!');
	if(game[2]==='X' && game[5]==='X' && game[8]==='X') console.log('X wins!');
	// three across
	if(game[0]==='X' && game[1]==='X' && game[2]==='X') console.log('X wins!');
	if(game[3]==='X' && game[4]==='X' && game[5]==='X') console.log('X wins!');
	if(game[6]==='X' && game[7]==='X' && game[8]==='X') console.log('X wins!');
	// diagonal wins
	if(game[2]==='X' && game[4]==='X' && game[6]==='X') console.log('X wins!');
	if(game[0]==='X' && game[4]==='X' && game[8]==='X') console.log('X wins!');

	// did Y win?
	// three down
	if(game[0]==='O' && game[3]==='O' && game[6]==='O') console.log('O wins!');
	if(game[1]==='O' && game[4]==='O' && game[7]==='O') console.log('O wins!');
	if(game[2]==='O' && game[5]==='O' && game[8]==='O') console.log('O wins!');
	// three across
	if(game[0]==='O' && game[1]==='O' && game[2]==='O') console.log('O wins!');
	if(game[3]==='O' && game[4]==='O' && game[5]==='O') console.log('O wins!');
	if(game[6]==='O' && game[7]==='O' && game[8]==='O') console.log('O wins!');
	// diagonal wins
	if(game[2]==='O' && game[4]==='O' && game[6]==='O') console.log('O wins!');
	if(game[0]==='O' && game[4]==='O' && game[8]==='O') console.log('O wins!');
}

checkWinner(game1);

// END OF LINE
