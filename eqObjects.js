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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  // if different lengths, not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    // if both are objects
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      /////
      return eqObjects(object1[key], object2[key]); ///////////////////////////////// new lines added: recursion!
      // if both are arrays
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if equal keys contain unequal arrays, not equal
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // if equal keys contain unequal values, not equal
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// TEST CODE

// //step 2
// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// eqObjects(ab, ba); // => true

// const abc = { a: '1', b: '2', c: '3' };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// // // step 3
// const cd = { c: '1', d: ['2', 3] };
// const dc = { d: ['2', 3], c: '1' };
// eqObjects(cd, dc); // => true

// const cd2 = { c: '1', d: ['2', 3, 4] };
// eqObjects(cd, cd2); // => false

// assertEqual(eqObjects(cd, dc), true); //
// assertEqual(eqObjects(cd, cd2), false); //

// // step 4
// const ef = { c: '1', d: { 2: 3 } };
// const fe = { d: { 2: 3 }, c: '1' };
// eqObjects(ef, fe); // => true

// const ef2 = { c: '1', d: ['2', 3, 4] };
// eqObjects(ef, ef2); // => false

// assertEqual(eqObjects(ef, fe), true); //
// assertEqual(eqObjects(ef, ef2), false); //

assertEqual(
  eqObjects({ a: { z: { cat: 7 } }, b: 2 }, { a: { z: { cat: 7 } }, b: 2 }),
  true
); // true
assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
); // false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // false
