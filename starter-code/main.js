// declare variables for the memory game
var cards = ['queen', 'queen', 'king', 'king']; 			// array of cards for the game
var cardsInPlay = [];										// empty array for the cards user selects
var gameBoard = document.getElementById('game-board');		// save "game-board" div to a variable
var btn = document.getElementById('reset');					// save "reset" button id to variable

// function that sets up the cards for the board
var createCards = function() {
// loops through the length of cards
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');	// creates a div element for each card
		cardElement.className = 'card';						// sets the created div element to class "card"
		cardElement.setAttribute('data-card', cards[i]);	// stores attribute about the card for later comparison
		cardElement.addEventListener('click', isTwoCards);	// activates isTwoCards function when user clicks on card
		gameBoard.appendChild(cardElement);					// adds new card to the game board
	}
}

// function checks to see if there are two cards in play
var isTwoCards = function() {
// add the selected card to the array cardsInPLay
// compare the card data to check if card is a king or queen
// set innerHTML to the appropriate card image	
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src = "king.png" alt = "King of Spades">';
	} else {
		this.innerHTML = '<img src = "queen.png" alt = "Queen of Diamonds">';
	}
// check if the user has selected two cards
// if two cards are selected, activate the isMatch function
// clear the cardsInPlay array for the next attempt	
// check if user clicks Begin Game button to reset the game
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
		btn.addEventListener('click', clearBoard);
	}
}

// function to test if two cards in play are a match
var isMatch = function(cards) {
// statement checks if the two cards are equal and displays result to user	
	if (cards[0] === cards[1]) {
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.");
	}
}

// function to reset the game board after user has selected two cards
var clearBoard = function() {
	document.getElementById('game-board').innerHTML = "";
	createCards();
}

// call function to create the cards for the game
createCards();

