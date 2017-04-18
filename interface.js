// REQUIRING BOTH JS FILES AND INQUIRER
let inquirer = require('inquirer'),
    basicCard = require('./basic.js'),
    clozeCard = require('./cloze.js'),
    basicFlashCards = [],
    clozeFlashCards = [];

let mainMenu = function () { // ASK TO MAKE CARD OR TAKE QUIZ
        inquirer.prompt([
            {
                type: 'list',
                name: 'option',
                message: 'What would you like to do?',
                choices: ['Make flash cards', 'Take Quiz', 'Quit']
            }
        ]).then(function (res) {
            switch (res.option) {
                case 'Make flash cards':
                    makeCardMenu();
                    break;
                case 'Take Quiz':
                    if (basicFlashCards.length === 0 && clozeFlashCards.length === 0) {
                        console.log('No cards available');
                        mainMenu();
                    } else quizMenu();
                    break;
                case 'Quit':
                    break;
            }
        })
    },
    makeCardMenu = function () { // PROMPT FOR MAKE CARD SELECTION
        inquirer.prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Would you like basic or cloze?',
                choices: ['Make basic card', 'Make cloze card']
            }
        ]).then(function (res) {
            if (res.option === 'Make basic card') makeBasicCard();
            else makeClozeCard();
        })
    },
    quizMenu = function () { // PROMPT FOR QUIZ TYPE SELECTION
        inquirer.prompt([
            {
                type: 'list',
                name: 'quiz',
                message: 'Take basic or cloze quiz?',
                choices: ['Basic Quiz', 'Cloze Quiz']
            }
        ]).then(function (res) {
            let count = 0;
            switch (res.quiz) {
                case 'Basic Quiz':
                    if (basicFlashCards.length === 0) {
                        console.log('No basic cards available.');
                        quizMenu();
                    } else {
                        basicQuiz(basicFlashCards[count].front, basicFlashCards[count].back, basicFlashCards.length, count);
                    }
                    break;
                case 'Cloze Quiz':
                    if (clozeFlashCards.length === 0) {
                        console.log('No cloze cards available.');
                        quizMenu();
                    } else clozeQuiz();
                    break;
            }
        })
    },
    makeBasicCard = function () {
        inquirer.prompt([
            {
                type: 'input',
                name: 'front',
                message: 'Front of card'
            },
            {
                type: 'input',
                name: 'back',
                message: 'Back of card'
            }
        ]).then(function (res) {
            let card = basicCard(res.front, res.back);
            basicFlashCards.push(card); // basicFlashCards[0].front and basicFlashCards[0].back
            console.log(basicFlashCards);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'option',
                    message: 'Make another?',
                    choices: ['Yes', 'No']
                }
            ]).then(function (res) {
                if (res.option === 'Yes') makeBasicCard();
                else mainMenu();
            })
        })
    },
    makeClozeCard = function () {
        inquirer.prompt([
            {
                type: 'input',
                name: 'full',
                message: 'Full text'
            },
            {
                type: 'input',
                name: 'hide',
                message: 'Text to hide'
            }
        ]).then(function (res) {
            let card = clozeCard(res.full, res.hide);
            clozeFlashCards.push(card);
        })
    },
    basicQuiz = function (front, back, length, count) { // START BASIC QUIZ
        inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: front
            }
        ]).then(function (res) {
            if (res.answer === back) {
                console.log('Correct!');
            }
            else {
                console.log('Sorry the correct answer is ' + back);
            }
            count++;
            if (count < length) {
                basicQuiz(basicFlashCards[count].front, basicFlashCards[count].back, length, count)
            }
            else {
                console.log('No more cards');
                mainMenu();
            }
        })
    },

    clozeQuiz = function () { // START CLOZE QUIZ

    };

mainMenu(); // START PROMPT