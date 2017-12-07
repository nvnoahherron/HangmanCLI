var Letter = require("./letter");

var wordArray = ["apple", "orange", "banana"];

var Word = function(gameWord){

	this.guesses = 10;

	this.letters = gameWord.split("").map(function(character){
		return new Letter(character);
	});

	this.checkLetter = function(userGuess){

			this.letters.forEach(function(item){

					if (userGuess === item.value) {

						item.display = true;

					}

			})
			this.guesses--;
			console.log(this.guesses);

	};

	this.display = function(){

		var guessSoFar = "";

		this.letters.forEach(function(item){

				if (item.display === true) {

					guessSoFar += item.value;

				} else {

					guessSoFar += item.placeholder;

				}

		})
		console.log(guessSoFar);
	};

	// word.prototype.underScore = function(word) {
	
	// for (var i = 0; i < newWord.length; i++) {
	// 	newWord[i] += " _";
	// 	console.log(newWord);
	// }
};


module.exports = Word;