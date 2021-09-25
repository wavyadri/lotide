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

module.exports = takeUntil;
