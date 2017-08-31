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
	checkForWin();
}

function computer() {
	for (value in buttonsIndex) {
		if (buttonsIndex[value].innerHTML == "^") {
			//console.log("it has the hat!");
			buttonsIndex[value].innerHTML = compChoice;
			checkForWin();
			break;
		}		
	}
}

function checkForWin() {
	//check for win condition
	/*win condition: if the values match for buttonsIndex indices :
	 * 	123, 456, 789, 147, 258, 369, 159, 357
	 */
	 var v1 = buttonsIndex[1].innerHTML,v2 = buttonsIndex[2].innerHTML,
			v3 = buttonsIndex[3].innerHTML,v4 = buttonsIndex[4].innerHTML,
			v5 = buttonsIndex[5].innerHTML,v6 = buttonsIndex[6].innerHTML,
			v7 = buttonsIndex[7].innerHTML,v8 = buttonsIndex[8].innerHTML,
			v9 = buttonsIndex[9].innerHTML;
	 //check user win condition
		if (v1  == userChoice && v2  == userChoice && v3 == userChoice) {
			console.log("You have won!");
		} else if (v4 == userChoice && v5 == userChoice && v6 == userChoice) {
			console.log("You have won!");
		} else if (v7 == userChoice && v8 == userChoice && v9 == userChoice) {
			console.log("You have won!");
		} else if (v1 == userChoice && v4 == userChoice && v7 == userChoice) {
			console.log("You have won!");
		} else if (v2 == userChoice && v5 == userChoice && v8 == userChoice) {
			console.log("You have won!");
		} else if (v3 == userChoice && v6 == userChoice && v9 == userChoice) {
			console.log("You have won!");
		} else if (v1 == userChoice && v5 == userChoice && v9 == userChoice) {
			console.log("You have won!");
		} else if (v3 == userChoice && v5 == userChoice && v7 == userChoice) {
			console.log("You have won!");
		} 
		
		//check for computer win condition
		if (v1  == compChoice && v2  == compChoice && v3 == compChoice) {
			console.log("You Lost!");
		} else if (v4 == compChoice && v5 == compChoice && v6 == compChoice) {
			console.log("You Lost!");
		} else if (v7 == compChoice && v8 == compChoice && v9 == compChoice) {
			console.log("You Lost!");
		} else if (v1 == compChoice && v4 == compChoice && v7 == compChoice) {
			console.log("You Lost!");
		} else if (v2 == compChoice && v5 == compChoice && v8 == compChoice) {
			console.log("You Lost!");
		} else if (v3 == compChoice && v6 == compChoice && v9 == compChoice) {
			console.log("You Lost!");
		} else if (v1 == compChoice && v5 == compChoice && v9 == compChoice) {
			console.log("You Lost!");
		} else if (v3 == compChoice && v5 == compChoice && v7 == compChoice) {
			console.log("You Lost!");
		}	 
}

console.log('loaded');
/* TODO
 * check for win
 * clean up clicked(), use functions for player() comp() to make it readable.
 *  
 * make game reset after win condition
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
