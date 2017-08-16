var buttonsIndex, gameOn, user, computer;

buttonsIndex = document.getElementsByTagName('a');
gameOn = false;
user = 'x';
computer = 'o';

//changes the game spaces to x and y values.
function clicked(text) {	
	text.innerHTML = "x";
	console.log(text);
}

console.log('loaded');
