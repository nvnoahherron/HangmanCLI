var Word = require("./word");

var inquirer = require("inquirer");

var wordArray = ["apple", "orange", "banana"];

var gamePrompt = [{

	type: "confirm",
	message: "Would you like to play hangman?",
	name: "confirm",
	default: true

}];

var letterPrompt = [{

	type: "input",
	message: "Select a letter",
	name: "guess"

}];

// var currentWord = getWord();

var getWord = function(){
		//create a variable which is set to a random index for wordArray
 		var randomWord = (Math.floor(Math.random() * wordArray.length));
 		//selects random element and sets it to variable theWord
		var theWord = wordArray[randomWord];
		var newWord = new Word(theWord);
		return newWord;

	}

var currentWord = getWord();



var newGame = function(){

	inquirer.prompt(letterPrompt).then(function(inquirerResponse){

		currentWord.checkLetter(inquirerResponse.guess);
		currentWord.display();

		if (inquirerResponse.guess === currentWord) {
			console.log("You win!")
		}


		guessLetter();


	})
};

var guessLetter = function(){

	inquirer.prompt(letterPrompt).then(function(inquirerResponse){

	currentWord.checkLetter(inquirerResponse.guess);
	currentWord.display();

	guessLetter();

})
}

inquirer.prompt(gamePrompt).then(function(inquirerResponse){

	if (inquirerResponse.confirm) {
		
		newGame();


	}
	else {
		console.log("Alright nevermind");
	}
});




