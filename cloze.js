// CLOZE FLASH CARD CONSTRUCTOR
var ClozeCard = function (text, cloze) {
    if (!(this instanceof ClozeCard))
        return new ClozeCard(text, cloze);
    this.text = text;
    this.cloze = cloze;
};
//USING STRING METHOD REPLACE TO REMOVE PART OF SENTENCE
ClozeCard.prototype.partText = function () {
    if (this.text.search(this.cloze) == -1) {
        console.log('Error: Does not contained the input');
    }
    else {
        console.log(this.text.replace(this.cloze, '..........'));
    }
};
// DISPLAY ONLY THE SOLUTION
ClozeCard.prototype.answerText = function () {
    console.log(this.cloze);
};
// DISPLAY THE FULL TEXT WITH SOLUTION
ClozeCard.prototype.fullText = function () {
    console.log(this.text);
};

module.exports = ClozeCard;