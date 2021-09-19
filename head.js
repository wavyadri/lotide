const assertEqual = require('./assertEqual');

const head = (arr) => {
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hell');
assertEqual(head([]), undefined);
