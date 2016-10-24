console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"
/*
if(cardTwo === cardFour){
	alert('You found a match!')
}else{
	alert("Sorry try again")
}
if(cardOne === cardTwo){
	alert('You found a match!')
}else{
	alert("Sorry try again")
}
if(cardThree === cardFour){
	alert('You found a match!')
}else{
	alert("Sorry try again")
}
*/

var cards = ["queen","queen","king","king"]
var cardsInPlay = []

var board = document.getElementById("game-board")

var createCards = function(){
	for(i = 0; i < cards.length; i++){
	var newDiv = document.createElement("div")
	newDiv.className = 'card'
	board.appendChild(newDiv)
	newDiv.setAttribute('data-card', cards[i])
	newDiv.addEventListener('click',function(){isTwoCards(this);picFlip(newDiv);})
}
}

function picFlip(div){
	if(div.getAttribute('data-card') === "king"){
		div.innerHTML = '<img src="king.png" alt="King" />';
}else if(div.getAttribute('data-card') === "queen"){
	div.innerHTML = '<img src="queen.png" alt="Queen" />';
}
}

function isTwoCards(x){
	cardsInPlay.push(x.getAttribute('data-card'));
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards){
	if(cards[0] === cards[1]){
		alert('Its a Match!')
		document.getElementByClassName('card').innerHTML = '';
	}else{
		alert('Try Again!')
	}
}

createCards()