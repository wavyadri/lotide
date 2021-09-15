const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (word) => {
  let results = {};

  // make all words lower case
  word = word.toLowerCase();

  for (const letter of word) {
    // letter must but a valid english letter to be counted
    if (/^[a-z]*$/.test(letter)) {
      if (results[letter]) {
        // if it has already been counted, increment by 1
        results[letter] += 1;
      } else {
        // if it has not yet appear, add with a value of 1
        results[letter] = 1;
      }
    }
  }
  return results;
};

// question: how to format tests

let result1 = countLetters(' ');
let result2 = countLetters('Adriana');

assertEqual(Object.keys(result1).length, 0);
assertEqual(result2.a, 3);
assertEqual(result2.d, 1);
assertEqual(result2.r, 1);
assertEqual(result2.i, 1);
assertEqual(result2.n, 1);
