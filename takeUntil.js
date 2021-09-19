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

// const takeUntil = function (array, callback) {
//   let newArray = [];
//   for (let element of array) {
//     if (!callback(element)) {
//       newArray.push(element);
//     } else {
//       return newArray;
//     }
//   }
//   return newArray;
// };

// refactor
const takeUntil = function (array, callback) {
  for (let element of array) {
    // once we reach an element that satisfies callback, slice to that index
    if (callback(element)) {
      return array.slice(0, array.indexOf(element));
    }
  }
  return;
};

// TESTS

//input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log('---');

const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
const results2 = takeUntil(data2, (x) => x === ',');
console.log(results2);

// output
assertArraysEqual(results1, [1, 2, 5, 7, 2]); // true
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']); // true

module.exports = takeUntil;
