const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('countOnly', () => {
  it('returns count of 2 for Fang', () => {
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
    const result = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.equal(result['Fang'], 2);
  });

  it('returns count of 1 for Jason', () => {
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
    const result = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.equal(result['Jason'], 1);
  });

  it('returns count of undefined for Karima', () => {
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
    const result = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.equal(result['Karima'], undefined);
  });
});
