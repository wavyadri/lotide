const findKeyByValue = (object, value) => {
  // returns an array of all the keys
  let keys = Object.keys(object);

  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
