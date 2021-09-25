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

module.exports = takeUntil;
