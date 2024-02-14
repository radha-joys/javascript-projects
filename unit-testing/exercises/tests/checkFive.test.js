const checkFive = require('../checkFive');
describe("check Five function", function(){

    test("returns 'number is less than 5.' if the input is less than 5", function(){
        expect(checkFive(4)).toBe("4 is less than 5.");
    });

    test("returns 'number is equal to 5.' if the input is euqal to 5", function(){
        expect(checkFive(5)).toBe("5 is equal to 5.");
    });

    test("returns 'number is greater than 5.' if the input is greater than 5", function(){
        expect(checkFive(7)).toBe("7 is greater than 5.");
    });

});