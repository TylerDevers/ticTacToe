var buttonsIndex, gameOn, userChoice, compChoice, num;

buttonsIndex = document.getElementsByTagName('a');
gameOn = false;
num = 9;


function start(startBtn) {
		var startBtnChange = document.getElementById("start");
		userChoice = document.querySelector('#xOrO').value;
		//console.log(num);
		if (userChoice == "x") {
			compChoice = "o";
		} else {
			compChoice = "x";
		}
		
		if (gameOn) {
			//reset game space
			gameReset();
		} else if (!gameOn) {
			//begins game, allows for moves
			startBtn.innerHTML = "Reset";
			startBtnChange.className = "btn btn-warning";
			gameOn = true;	
		}
}

function gameReset() {
		var resetBtn = document.querySelector("#start");
		num = 9;
		//console.log(num);
		resetBtn.innerHTML = "Start";
		for (var i = 1; i<buttonsIndex.length; i++) { 
			//starts at index 1 to prevent start button text from changing.
			buttonsIndex[i].innerHTML = "^";
		}
		resetBtn.className = "btn btn-default";
		gameOn = false;
}

//changes the game tiles to x and o values.
function clicked(text) {	
	if (!gameOn){
		alert("You Must click Start to begin");
	} else {		
		if (text.innerHTML == userChoice || text.innerHTML == compChoice) {
				alert("That space is taken, please choose another.");
		} else {
				userMove(text);
				//makes comp "take a moment" to think about move.
				setTimeout(computerMove, 1000);
			//setTimeout(draw, 500); 
		}
	}
}

function userMove(fillBox) {
	//called by clicked(). handles users move
	fillBox.innerHTML = userChoice;
	checkForWin();
	setTimeout(draw,300);
}

function computerMove() {
	var randomValue = Math.floor(Math.random()*10);
	if (buttonsIndex[randomValue].innerHTML == "^") {
		//console.log("it has the hat!");
		buttonsIndex[randomValue].innerHTML = compChoice;
		checkForWin();
		setTimeout(draw,300);
	}	else {
		//console.log("comp tries again");
		computerMove();
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
			
		if (v1  == userChoice && v2  == userChoice && v3 == userChoice) {
			setTimeout(youWon, 500);
		} else if (v4 == userChoice && v5 == userChoice && v6 == userChoice) {
			setTimeout(youWon, 500);
		} else if (v7 == userChoice && v8 == userChoice && v9 == userChoice) {
			setTimeout(youWon, 500);
		} else if (v1 == userChoice && v4 == userChoice && v7 == userChoice) {
			setTimeout(youWon, 500);
		} else if (v2 == userChoice && v5 == userChoice && v8 == userChoice) {
			setTimeout(youWon, 500);
		} else if (v3 == userChoice && v6 == userChoice && v9 == userChoice) {
			setTimeout(youWon, 500);
		} else if (v1 == userChoice && v5 == userChoice && v9 == userChoice) {
			setTimeout(youWon, 500);
		} else if (v3 == userChoice && v5 == userChoice && v7 == userChoice) {
			setTimeout(youWon, 500);
		} 
		
		//check for computer win condition
		if (v1  == compChoice && v2  == compChoice && v3 == compChoice) {
			setTimeout(youLost, 500);
		} else if (v4 == compChoice && v5 == compChoice && v6 == compChoice) {
			setTimeout(youLost, 500);
		} else if (v7 == compChoice && v8 == compChoice && v9 == compChoice) {
			setTimeout(youLost, 500);
		} else if (v1 == compChoice && v4 == compChoice && v7 == compChoice) {
			setTimeout(youLost, 500);
		} else if (v2 == compChoice && v5 == compChoice && v8 == compChoice) {
			setTimeout(youLost, 500);
		} else if (v3 == compChoice && v6 == compChoice && v9 == compChoice) {
			setTimeout(youLost, 500);
		} else if (v1 == compChoice && v5 == compChoice && v9 == compChoice) {
			setTimeout(youLost, 500);
		} else if (v3 == compChoice && v5 == compChoice && v7 == compChoice) {
			setTimeout(youLost, 500);
		}	 
}

function youWon() {
		alert("You Won! Press okay to play again");
		location.reload();
}

function youLost() {
		alert("You Lost! Press okay to play again");
		location.reload();
}

function draw() {
	//console.log(num);
	num--;
	if (num < 1) {
		alert("It was a draw!! Press okay to play again");
		location.reload();
	}
	
}
//console.log('loaded');

