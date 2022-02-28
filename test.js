const assert = require('assert');

function addition({ a, b }) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error();
  }
  return a + b;
}

describe('#addition', function () {
  context('When a and b are number', function () {
    it.only('should return the addition', async function () {
      // given
      const a = 1;
      const b = 3;

      // when
      const result = addition({ a, b });

      // then
      assert.equal(result, 4);
    });
  });

  it.only('should throw an error', async function () {
    // given
    const a = 1;
    const b = 3;

    // when
    const result = addition({ a, b });

    // then
    assert.equal(result, 4);
  });
});
