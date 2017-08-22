var buttonsIndex, gameOn, user, computer, turn, lastMoveWas;

buttonsIndex = document.getElementsByTagName('a');
gameOn = false;

function start(text) {
		user = document.querySelector('#userChar').value;
		var classSwitchTo = document.getElementById("start");
		if (gameOn) {
			text.innerHTML = "Start";
			for (var i = 1; i<buttonsIndex.length; i++) { 
				//starts at index 1 to prevent start button from changing.
				buttonsIndex[i].innerHTML = "^";
			}
			classSwitchTo.className = "btn btn-default";
			lastMoveWas = undefined;
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
			if (lastMoveWas == undefined) {
				lastMoveWas = user;
				text.innerHTML = user;
			} else if (lastMoveWas == user && lastMoveWas == "x") {
				text.innerHTML = "x";
				console.log(lastMoveWas + " user");
				lastMoveWas = "x";
			} else if (lastMoveWas == user && lastMoveWas == "o") {
				lastMoveWas = "o";
				text.innerHTML = "o";
				console.log(lastMoveWas + " user");
			}else if (lastMoveWas != user && lastMoveWas == "x") {
				lastMoveWas = "x";
				text.innerHTML = "x";
				console.log(lastMoveWas + " comp");
			} else if (lastMoveWas != user && lastMoveWas == "o") {
				lastMoveWas = "o";
				text.innerHTML = "o";
				console.log(lastMoveWas + " comp");
			}
	}
}
console.log('loaded');

/* TODO
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
