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

module.exports = countLetters;
