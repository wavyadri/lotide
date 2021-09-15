const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1['Agouhanna'], undefined);
