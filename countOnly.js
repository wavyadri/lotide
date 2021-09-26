const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    // if array element is a key in itemsToCount obj that has a property of true
    if (itemsToCount[item]) {
      if (results[item]) {
        // if it has already been counted, increment by 1
        results[item] += 1;
      } else {
        // if it has not yet appear, add with a value of 1
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;
