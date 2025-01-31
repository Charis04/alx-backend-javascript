const Utils = {
    calculateNumber: function calculateNumber(type, a, b) {
        // Round the inputs
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);
      
        // Perform the operation based on the type
        if (type === 'SUM') {
          return roundedA + roundedB;
        } else if (type === 'SUBTRACT') {
          return roundedA - roundedB;
        } else if (type === 'DIVIDE') {
          if (roundedB === 0) {
            return 'Error';
          }
          return roundedA / roundedB;
        } else {
          throw new Error('Invalid operation type');
        }
    }
}

module.exports = Utils;
