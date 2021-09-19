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

module.exports = middle;
