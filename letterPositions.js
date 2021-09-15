const eqArrays = (arr1, arr2) => {
  // check if arrays are equal in length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // check if array values are equal at the same index
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ Arrays Are Equal! ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑 Arrays Are NOT Equal ${arr1} !== ${arr2}`);
  }
};

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
  console.log(results);

  return results;
};

assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);
