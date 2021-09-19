// Our version will assert both pass and fail
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

findKey(
  {
    monday: { hours: 7 },
    tuesday: { hours: 7 },
    wednesday: { hours: 8 },
    thursday: { hours: 8 },
    friday: { hours: 8 },
    saturday: { hours: 4 },
  },
  (x) => x.stars === 8
); // => "noma"

// TEST CODE
assertEqual(
  findKey(
    {
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  'noma'
);
assertEqual(
  findKey(
    {
      monday: { hours: 7 },
      tuesday: { hours: 7 },
      wednesday: { hours: 8 },
      thursday: { hours: 8 },
      friday: { hours: 8 },
      saturday: { hours: 4 },
    },
    (x) => x.hours === 8
  ),
  'wednesday'
);

module.exports = findKey;
