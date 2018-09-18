// main.js
var cardsInPlay = [];
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var score = 0;
var attempts = 0;

var updateScore = function () {
	var scoreDisplay = document.getElementById("user-score");
	scoreDisplay.innerHTML = "Your Score: " + score + "/" + attempts;
};

var checkForMatch = function () {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
		score++;
	} else {
		alert("Sorry, try again.");

	}
	attempts++;
	updateScore();
};

var resetBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var myCards = document.getElementsByTagName("img");
		myCards[i].setAttribute("src", "images/back.png");
		cardsInPlay = [];
	}
};

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		var board = document.getElementById("game-board");
		board.appendChild(cardElement);
		var myButton = document.getElementById("reset");
		myButton.addEventListener("click", resetBoard);
	}
};

createBoard();