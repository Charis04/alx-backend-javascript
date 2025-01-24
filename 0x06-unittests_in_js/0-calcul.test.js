const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe("calculateNumber", function () {
  it("should round a and b and return the sum", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1.2, 3.8), 5);
    assert.strictEqual(calculateNumber(1.5, 3.5), 6);
  });
});