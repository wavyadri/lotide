const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (results[letter]) {
      // if it has already been counted, push index
      results[letter].push(i);
    } else {
      // if it has not yet appear, add an array with the index
      results[letter] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;
