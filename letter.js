
// Constructor function creating letter objects
function Letter(character, isGuessed, returnChar, updateLetter) {
    this.character = character;
    this.isGuessed = false;
    this.returnChar = function() {
        if (isGuessed === true) {
            placeHolder = character;
        }
        else {
            placeHolder = "_";
        }
    };
    this.updateLetter = function(character){
        if (guess === character) {
            this.isGuessed = true;
        }
    }
}

// creates the printInfo method and applies it to all letter objects
Letter.prototype.printInfo = function() {
console.log("In letter.js, the character is " + this.character + "\nthe letter was guessed: " + this.isGuessed +
"\nIn returnChar, the placeholder is : " + placeHolder);
console.log("---------------");
};

Letter.printInfo();

module.exports = Letter;
