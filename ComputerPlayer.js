const Dictionary = require("./dictionary.js");
const Moves = require("./moves.js");

class ComputerPlayer {
    constructor() {
        this.dictionary = Dictionary;
        this.newWord = "";
        this.category = "";
        this.MOVES = Moves;
        this.difficulty;
    } // End of constructor

    secretWordDiff(lengthArr) {
        this.newWord = this.dictionary[this.category][Math.floor(Math.random() * this.dictionary[this.category].length)];

        if(lengthArr[1]) {
            while(this.newWord.length < lengthArr[0] || this.newWord.length > lengthArr[1]) {
                this.newWord = this.dictionary[this.category][Math.floor(Math.random() * this.dictionary[this.category].length)];
            }
        } else {
            while(this.newWord.length < lengthArr[0]) {
                this.newWord = this.dictionary[this.category][Math.floor(Math.random() * this.dictionary[this.category].length)];
            }
        }   
    } // End of secretWordDiff() function

    setCategory(categoryChoice) {
        for(let i = 0; i <= 6; i++) {
            if(i === categoryChoice) {
                this.category = this.dictionary["cats"][categoryChoice - 1];
                break;
            }
        }
    }

    secretWord() {
        let difficulty = { 
            1: [11],
            2: [8, 10],
            3: [5, 7],
            4: [0, 4]
        }

        this.secretWordDiff(difficulty[this.difficulty])

        for(let i = 0; i < this.newWord.length; i++) {
            if(this.newWord[i] !== " ") {
                this.newWordLength++;
            }
        }

        return this.newWordLength;
    } // End of secretWord() function

    revealWord() {
        return `The word was "${this.newWord.toUpperCase()}".`;
    } // End of revealWord() function

    randomLetter() {
        return this.MOVES[Math.floor(Math.random() * 27) - 1];
    } // End of randomLetter() function

    getMove(referee, guessesArr, board) {
        let newWordArr = referee.newWord.split("");
        let guess = this.randomLetter();
        
        let guessNotRepeat = false;
        while(!guessNotRepeat) {
            if(!newWordArr.includes("a") && !newWordArr.includes("e") && !newWordArr.includes("i") && !newWordArr.includes("o") && !newWordArr.includes("u")) {
                guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);

                if(guessesArr.includes(guess) || !board.isValidMove(guess)) {
                    guess = this.getMoveNoVowels(["a", "e", "i", "o", "u"]);
                } else {
                    guessNotRepeat = true;
                    break;
                }
            }

            if(guessesArr.includes(guess) || !board.isValidMove(guess)) {
                guess = this.randomLetter();
            } else {
                guessNotRepeat = true;
                break;
            }
            
        } // End of guessNotRepeated
        return guess;
    } // End of getMove() function


    getMoveNoVowels(vowels, guess) {
        while(vowels.includes(guess) || guess === undefined) {
            guess = this.randomLetter();
        } // End of loop if randomLetter() returns a vowel

        return guess;
    } // End of getMoveNoVowels() function

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }
}

let cpu = new ComputerPlayer();

module.exports = ComputerPlayer;