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
    // if equal keys contain unequal arrays, not equal
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2)) {
    console.log(
      `✅✅ Arrays Are Equal! ${inspect(object1)} === ${inspect(object2)}`
    );
  } else {
    console.log(
      `🛑🛑 Arrays Are NOT Equal ${inspect(object1)} !== ${inspect(object2)}`
    );
  }
};

assertObjectsEqual({ a: 2 }, { a: 1 }); // not equal
assertObjectsEqual({ a: 1 }, { a: 1 }); // equal
