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

const without = (source, itemsToRemove) => {
  // if itemsToRemove does not include item from source, remove
  // filter method creates a new array with items that match condition
  return source.filter((item) => !itemsToRemove.includes(item));
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(['1', '2', '3'], [1, 2, '3'])); // => ["1", "2"]
console.log(without([2, 3, 54], [3, 4, 6, 2])); // => [54]

// should be returning a new array and not modify the original array that is passed in
const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);

module.exports = without;
