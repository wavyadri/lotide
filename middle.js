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

const middle = (arr) => {
  let middleElement = [];

  // calculate middle index
  let i = Math.ceil(arr.length / 2) - 1;

  // edge case: arr must have at least 3 elements
  if (arr.length <= 2) {
    return middleElement;
  }

  // even length array
  if (arr.length % 2 === 0) {
    middleElement.push(arr[i]);
    middleElement.push(arr[i + 1]);
    return middleElement;
  } else if (arr.length % 2 !== 0) {
    // odd length array
    middleElement.push(arr[i]);
    return middleElement;
  }
};

console.log(middle([1, 6, 3]));

assertArraysEqual(middle([1, 6]), []); // true should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // true should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // true should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4, 5]); // false should FAIL
