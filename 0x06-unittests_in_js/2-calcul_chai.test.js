const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('type == "SUM"', function () {
    it('should return the sum of two rounded numbers', function () {
      expect(calculateNumber('SUM', 1.4, 3.6)).to.equal(5); // Rounds 1.4 to 1 and 3.6 to 4
    });

    it('should handle negative numbers correctly', function () {
      expect(calculateNumber('SUM', -1.4, -3.6)).to.equal(-5); // Rounds -1.4 to -1 and -3.6 to -4
    });

    it('should return the sum when inputs are already integers', function () {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });
  });

  describe('type == "SUBTRACT"', function () {
    it('should return the difference of two rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 5.7, 2.3)).to.equal(4); // Rounds 5.7 to 6 and 2.3 to 2
    });

    it('should handle negative numbers correctly', function () {
      expect(calculateNumber('SUBTRACT', -4.8, -2.2)).to.equal(-3); // Rounds -4.8 to -5 and -2.2 to -2
    });

    it('should return the correct result when subtracting from zero', function () {
      expect(calculateNumber('SUBTRACT', 0, 4.5)).to.equal(-5); // Rounds 4.5 to 5
    });
  });

  describe('type == "DIVIDE"', function () {
    it('should return the division of two rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 7.8, 2.1)).to.equal(4); // Rounds 7.8 to 8 and 2.1 to 2
    });

    it('should handle division by a rounded zero and return "Error"', function () {
      expect(calculateNumber('DIVIDE', 4.5, 0.2)).to.equal('Error'); // Rounds 0.2 to 0
    });

    it('should return a positive result for division of two negative numbers', function () {
      expect(calculateNumber('DIVIDE', -9.5, -3.5)).to.equal(3); // Rounds -9.5 to -10 and -3.5 to -4
    });
  });

  describe('Invalid Type', function () {
    it('should throw an error for an invalid operation type', function () {
      expect(() => calculateNumber('MULTIPLY', 2, 3)).to.throw('Invalid operation type');
    });
  });
});
