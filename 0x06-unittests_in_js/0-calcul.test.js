const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded integers (both inputs are integers)',
    function() {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should round inputs and return the correct sum', function() {
    const result = calculateNumber(1, 3.7)
    assert.strictEqual(result, 5);
  });

  it('should round inputs and return the correct sum', function() {
    const result = calculateNumber(1.9, 4)
    assert.strictEqual(result, 6);
  });

  it('should handle negative numbers', function() {
    const result = calculateNumber(-1.4, -3.6)
    assert.strictEqual(result, -5);
  });

  it('should round to the nearest integer correctly for midpoints (0.5)',
    function() {
    const result = calculateNumber(2.5, 3.5)
    assert.strictEqual(result, 7); // Rounds both to 3 and 4
  });

  it('should return the correct result when one input is zero', function() {
    const result = calculateNumber(0, 2.8)
    assert.strictEqual(result, 3); // Rounds 2.8 to 3
  });

  it('should return the correct result when one input is very small',
    function() {
      const result = calculateNumber(0.1, 0.2)
      assert.strictEqual(result, 0); // Rounds both to 0
  });

  it('should handle very large numbers correctly', function() {
    const result = calculateNumber(1000.7, 2000.2)
    assert.strictEqual(result, 3001); // Rounds to 1001 and 2000
  });
});
