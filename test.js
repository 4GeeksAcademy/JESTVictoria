// Import the function sum from the app.js file
const { sum } = require('./app.js');


// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);


    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');


    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);


    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;
   
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});


test("One dollar should be 146.26 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');


    // Use the function like its supposed to be used
    const yens = fromDollarToYen(2);


    // If 1 dollar is 146.26 yen, then 2 dollars should be (2 * 146.26)
    const expected = 2 * 146.26;
   
    // This is the comparison for the unit test
     expect(fromDollarToYen(2)).toBe(292.5233644859813);
});


test("One pound should be 0.00555910 yen", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');


    // Use the function like its supposed to be used
    const pounds = fromYenToPound(5);


    // If 1 pound is 0.00555910 yen, then 5 pounds should be (5 * 0.00555910)
    const expected = 5 * 0.00555910;
   
    // This is the comparison for the unit test
     expect(fromYenToPound(5)).toBe(0.027795527156549524);
});
