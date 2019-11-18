// This would construct a board to the length.
// It should check if the board is complete.
// It should be able to add characters at differnect indicies.
class Board {
    constructor(length) {
        this.board = new Array(length).fill("_");
    }

    length() {
        return this.board.length;
    }

    get(idx) {
        return this.board[idx];
    }
    isComplete() {
        return this.board.every(el => el !== "_");
    }

    addChar(indicies, char) {
        for(let i of indicies) {
            this.board[i] = char; 
        }
    }
}

module.exports = Board;