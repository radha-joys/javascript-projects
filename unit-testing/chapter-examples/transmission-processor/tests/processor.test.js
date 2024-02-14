const processor = require('../processor.js');
describe("transmission processor", function() {

   //  TODO: put tests here
  test("takes a string and returns an object", function(){
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  test("returns -1 if input doesnot contain ::", function(){
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function(){
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

  test("id should be a number", function(){
    let result = processor("9701::<489584872710>");
    expect(typeof result.id).toBe("number");
  });

  test("returns raw data in object", function(){
    let result = processor("9701::<489584872710>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 if rawData doesnt contain < in starting , > at the end", function(){
    let result = processor("9701::<48729740349>5720912");
    expect(result.rawData).toBe(-1);
  });

  test("Return -1 if the id part of the transmission cannot be converted to a number.", function(){
    let result = processor("trt9701::<48729740349>");
    expect(result.id).toBe(-1);
  });

  test("Do not include the < > symbols in the value assigned to rawData", function(){
    let result = processor("trt9701::<48729740349>");
    expect(result.rawData).toBe(48729740349);
  });

  test("Return -1 for the value of rawData if anything besides numbers are present between the < > symbols.", function(){
    let result = processor("9701::<48729dgf740349>");
    expect(result.rawData).toBe(-1);
  });

 });