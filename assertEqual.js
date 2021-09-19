// MDN :
// The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

// Our version will assert both pass and fail
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

module.exports = assertEqual;
