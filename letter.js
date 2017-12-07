//creates our object - ourLetter
var Letter = function(letter){
	//sets the value to letter
	this.value = letter;

	this.placeholder = " _";
	//sets the dispay of our object to false
	this.display = false;
	//creates a method

	// this.showLetter = function(){
	// 	//if our value is in our word change our display to true
	// 	if (this.display === '') {
	// 		this.display = true;
	// 		// otherwise leave our value as underscores
	// 	} else {
	// 		this.value = " _";
	// 	}
	// }
};
//exports this object 
 module.exports = Letter;