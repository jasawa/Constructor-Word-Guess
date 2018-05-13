//var placeholder = "_";
//var guess = "q";
// Constructor function creating letter objects
function Letter(character) {
    this.character = character;
    this.isGuessed = false;

    this.returnChar = function() {
        if (isGuessed === true) {
            placeholder = this.character;
            console.log("placeholder " + placeholder);
        }
        else {
            placeholder = "_";
            console.log("placeholder " + placeholder);
        }
    };

    this.changeIsGuessed = function(character) {
        if (guess === character) {
            this.isGuessed = true;
            console.log("---true----" + this.isGuessed);
        }
        else {
            console.log("----false---" + this.isGuessed);
        }
    };
    
    
    /*this.printInfo = function() {
        console.log("this.character is " + this.character);
        console.log("this.isGuessed is " + this.isGuessed);
        console.log("this.character is " + this.placeholder);
        console.log("this.changeIsGuessed is " + this.isGuessed);
        console.log("guess is " + guess);
    };*/
}

// creates the printInfo method and applies it to all letter objects
/*Letter.prototype.printInfo = function() {
console.log("In letter.js, the character is " + this.character + "\nthe letter was guessed: " + this.isGuessed +
"\nIn returnChar, the placeholder is : " + placeholder);
console.log("---------------");
}*/
//var guess = "q";
//var newLetter = new Letter("q");
//newLetter.printInfo();

// exporting Letter to use in word.js
module.exports = Letter;
