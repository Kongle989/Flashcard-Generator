// BASIC FLASH CARD CONSTRUCTOR WITH A FRONT AND A BACK
let BasicCard = function (front, back) {
    if (!(this instanceof BasicCard))
        return new BasicCard(front, back);
    this.front = front;
    this.back = back;
};

module.exports = BasicCard;