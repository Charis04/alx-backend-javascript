function calculateNumber(a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    const c = roundA + roundB;
    return Math.round(c);
  }
  
  module.exports = calculateNumber;
