// only works for 1 level deep nested array
const flatten = (arrays) => {
  return [].concat(...arrays);
};

module.exports = flatten;
