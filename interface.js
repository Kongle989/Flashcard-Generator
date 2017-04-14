// REQUIRING BOTH JS FILES
var basicCard = require('./basic.js'),
    clozeCard = require('./cloze.js'),
    // USING PROCESS.ARGV TO TAKE IN USER INPUT
    cardType = process.argv[2],
    front = process.argv[3],
    back = process.argv[4];

if (cardType == 'simple') {
    var simple = basicCard(front, back);
    console.log(simple.front);
    console.log(simple.back);
}
else {
    var cloze = clozeCard(front, back);
    cloze.partText();
    cloze.answerText();
    cloze.fullText();
}