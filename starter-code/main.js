// variables that simulate the cards in the game as either a "king" or "queen"
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// check for equality between two cards and display alert in the browser
if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.")
}