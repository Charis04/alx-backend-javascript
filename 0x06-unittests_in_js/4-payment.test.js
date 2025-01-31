const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

// Stub the function Utils.calculateNumber to always return the same number
// 10 Verify that the stub is being called with type = SUM, a = 100, and
// b = 20 Add a spy to verify that console.log is logging the correct message
// The total is: 10

describe('sendPaymentRequestToApi', function() {
  it('should return 10', function() {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    spy.restore();
  });
});
