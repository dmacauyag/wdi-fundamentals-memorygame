// variables that simulate the cards in the game as either a "king" or "queen"
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// check for equality between two cards and display alert in the browser
/* if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.")
} */

// selects elements that have an id of "game-board"
var gameBoard = document.getElementById('game-board');

// function to create cards for the memory game
var createCards = function() {
	// for loop that creates an HTML div element for each card, assuming 4 cards
	for (var i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
};

// call function to create the cards for the game
createCards();