const eqArrays = (arr1, arr2) => {
  // check if arrays are equal in length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // check if array values are equal at the same index
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // check lengths of nest arrays
      if (arr1[i].length !== arr2[i].length) {
        return false;
      } else {
        // if they are equal lengths, recursion! let's see if they really are ===
        eqArrays(arr1[i], arr2[i]);
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;
