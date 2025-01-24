const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded integers (both inputs are integers)', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round inputs and return the correct sum', function() {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5); // Rounds 1.4 to 1 and 3.6 to 4
  });

  it('should handle negative numbers', function() {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5); // Rounds -1.4 to -1 and -3.6 to -4
  });

  it('should round to the nearest integer correctly for midpoints (0.5)', function() {
    assert.strictEqual(calculateNumber(2.5, 3.5), 7); // Rounds both to 3 and 4
  });

  it('should return the correct result when one input is zero', function() {
    assert.strictEqual(calculateNumber(0, 2.8), 3); // Rounds 2.8 to 3
  });

  it('should return the correct result when one input is very small', function() {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0); // Rounds both to 0
  });

  it('should handle very large numbers correctly', function() {
    assert.strictEqual(calculateNumber(1000.7, 2000.2), 3001); // Rounds to 1001 and 2000
  });
});
