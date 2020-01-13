//main.js
console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];
let cardOne = cards[0];
const cardsInPlay =[];
cardsInPlay.push(cardOne);
console.log("User flipped a " + cardOne);
let cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped a " + cardTwo)
if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}


