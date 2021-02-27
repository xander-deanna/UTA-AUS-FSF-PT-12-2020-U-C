// TODO: Import `maths.js`
const mathslol = require('./maths.js');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const op = process.argv[2]
const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter

if (op === "sum") {
    const result = maths.sum(numOne, numTwo)
    console.log("result for sum: ", result)
}
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
