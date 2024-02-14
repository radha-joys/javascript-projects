const whoWon = require('../RPS');
const rps = require('../RPS');

describe("check rps function", function(){
    test("return 'TIE!' if both players chooses same option", function(){
        expect(whoWon('rock', 'rock')).toBe('TIE!');
    });

    test("returns 'Player 2 wins!' if P1 value is 'rock', P2 value is 'paper' ", function(){
        expect(whoWon('rock','paper')).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 value is 'paper', P2 value is 'scissors'", function(){
        expect(whoWon('paper','scissors')).toBe("Player 2 wins!");
     });
});