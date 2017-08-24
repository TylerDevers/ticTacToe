var buttonsIndex, gameOn, user, computer, turn, lastMove;

buttonsIndex = document.getElementsByTagName('a');
gameOn = false;

function start(text) {
		user = document.querySelector('#xOrO').value;
		var classSwitchTo = document.getElementById("start");
		if (gameOn) {
			text.innerHTML = "Start";
			for (var i = 1; i<buttonsIndex.length; i++) { 
				//starts at index 1 to prevent start button from changing.
				buttonsIndex[i].innerHTML = "^";
			}
			classSwitchTo.className = "btn btn-default";
			lastMove = undefined;
			gameOn = false;
		} else if (!gameOn) {
			text.innerHTML = "Reset";
			classSwitchTo.className = "btn btn-warning";
			gameOn = true;	
		}
}

//changes the game tiles to x and y values.
function clicked(text) {	
	if (gameOn){
			if (lastMove == undefined) {
				lastMove = user;
				text.innerHTML = user;
			} else if (lastMove == user && lastMove == "x") {
				text.innerHTML = "o";
				console.log(lastMove + " user");
				lastMove = "o";
			} else if (lastMove == user && lastMove == "o") {
				text.innerHTML = "x";
				console.log(lastMove + " user");
				lastMove = "x";
			}else if (lastMove != user && lastMove == "x") {
				text.innerHTML = "o";
				console.log(lastMove + " comp");
				lastMove = "o";
			} else if (lastMove != user && lastMove == "o") {
				text.innerHTML = "x";
				console.log(lastMove + " comp");
				lastMove = "x";
			}
	}
}
console.log('loaded');

/* TODO
 * clean up clicked(), use other functions for player() comp() to make it readable.
 * add alert to clicked, if game is not on when tiles are clicked. alert 
 * make game reset after win condition
 * create game logic
 * make turn automatically switch after move
 * check for win
 */

/* sudo code
 * if (game has not started) {
 * 	user selects character
 * 	user starts game
 * }
 * if (game has started) {
 * 	read users character selection
 * 	set user and computer var appropriately
 * 	allow moves to be made
 * 	allow game to be reset
 * }
 * if (move has been made) {
 * 	switch turn to computer/user
 * 	check for win condition
 * 	check for draw
 * }
 * if (win condition) {
 * 	stop game, congratulate(or not)
 * 	start new game after 5 seconds
 * }
 * if (game a draw) {
 * 	stop game, give draw message
 * 	start new game after 5 seconds
 * }
 */
