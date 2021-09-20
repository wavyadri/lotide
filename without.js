const without = (source, itemsToRemove) => {
  // if itemsToRemove does not include item from source, remove
  // filter method creates a new array with items that match condition
  return source.filter((item) => !itemsToRemove.includes(item));
};

module.exports = without;
