// CLOZE FLASH CARD CONSTRUCTOR
let ClozeCard = function (text, cloze) {
    if (!(this instanceof ClozeCard))
        return new ClozeCard(text, cloze);
    this.text = text;
    this.cloze = cloze;
};
//USING STRING METHOD REPLACE TO REMOVE PART OF SENTENCE
ClozeCard.prototype.partText = function () {
    return this.text.replace(this.cloze, '..........');
};
// DISPLAY ONLY THE SOLUTION
ClozeCard.prototype.clozeText = function () {
    return this.cloze;
};

module.exports = ClozeCard;