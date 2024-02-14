// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("check if the value of organization is 'nonprofit'", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("check if the value of executiveDirector is 'Jeff'", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("check if the value of percentageCoolEmployees is 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("check if the value of programsOffered is as expected when accessed individual items and the lenght of it is 3", function(){
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'", function(){
    expect(launchcode.launchOutput(8)).toBe('Launch!');
  });

  test("When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!'", function(){
    expect(launchcode.launchOutput(9)).toBe('Code!');
  });

  test("When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!'", function(){
    expect(launchcode.launchOutput(25)).toBe('Rocks!');
  });

  test("When passed a number that is ONLY divisible by 2 and 3, launchOutput() returns 'LaunchCode!'", function(){
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });

  test("When passed a number that is ONLY divisible by 2 and 5, launchOutput() returns 'Launch Rocks! (CRASH!!!!)'", function(){
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("When passed a number that is ONLY divisible by 3 and 5, launchOutput() returns 'Code Rocks!'", function(){
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

  test("When passed a number that is ONLY divisible by 2, 3 and 5, launchOutput() returns 'LaunchCode Rocks!'", function(){
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  test("When passed a number that is Not divisible by 2, 3 and 5, launchOutput() returns 'Rutabagas! That doesn't work.'", function(){
    expect(launchcode.launchOutput(17)).toBe("Rutabagas! That doesn't work.");
  });
  
});