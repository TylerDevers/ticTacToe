var buttonsIndex, gameOn, userChoice, compChoice, turn, lastMove;

buttonsIndex = document.getElementsByTagName('a');
gameOn = false;

function start(text) {
		var classSwitchTo = document.getElementById("start");
		userChoice = document.querySelector('#xOrO').value;
		turn = "user";
		
		if (userChoice == "x") {
			compChoice = "o";
		} else {
			compChoice = "x";
		}
		
		if (gameOn) {
			//reset game space
			text.innerHTML = "Start";
			for (var i = 1; i<buttonsIndex.length; i++) { 
				//starts at index 1 to prevent start button from changing.
				buttonsIndex[i].innerHTML = "^";
			}
			classSwitchTo.className = "btn btn-default";
			lastMove = undefined;
			gameOn = false;
		} else if (!gameOn) {
			//begins game, allows for moves
			text.innerHTML = "Reset";
			classSwitchTo.className = "btn btn-warning";
			gameOn = true;	
		}
}

//changes the game tiles to x and y values.
function clicked(text) {	
	var newButtons = [];
	if (!gameOn){
		alert("You Must click Start to begin");
	} else {
		if (text.innerHTML == userChoice || text.innerHTML == compChoice) {
				alert("That space is taken, please choose another.");
		} else {
			user(text);
			setTimeout(computer, 1000);
			//use buttonsIndex to somehow determine the computers move.
		} 
	}
}


function user(fillBox) {
	//called by clicked(). handles users move
	fillBox.innerHTML = userChoice;
}

function computer() {
	for (value in buttonsIndex) {
		if (buttonsIndex[value].innerHTML == "^") {
			console.log("it has the hat!");
			buttonsIndex[value].innerHTML = compChoice;
			break;
		}		
	}
	
}

console.log('loaded');
/* TODO
 * clean up clicked(), use functions for player() comp() to make it readable.
 *  
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
 * if (space already used) {
 * 	alert message;
 * }
 */
