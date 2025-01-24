const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5); // Rounds 1.4 to 1 and 3.6 to 4
    });

    it('should handle negative numbers correctly', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -3.6), -5); // Rounds -1.4 to -1 and -3.6 to -4
    });

    it('should return the sum when inputs are already integers', function () {
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 2.3), 4); // Rounds 5.7 to 6 and 2.3 to 2
    });

    it('should handle negative numbers correctly', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.8, -2.2), -3); // Rounds -4.8 to -5 and -2.2 to -2
    });

    it('should return the correct result when subtracting from zero', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 4.5), -5); // Rounds 4.5 to 5
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 7.8, 2.1), 4); // Rounds 7.8 to 8 and 2.1 to 2
    });

    it('should handle division by a rounded zero and return "Error"', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 0.2), 'Error'); // Rounds 0.2 to 0
    });

    it('should return a positive result for division of two negative numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -9.5, -3.5), 3); // Rounds -9.5 to -10 and -3.5 to -4
    });
  });

  describe('Invalid Type', function () {
    it('should throw an error for an invalid operation type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 2, 3), /Invalid operation type/);
    });
  });
});
