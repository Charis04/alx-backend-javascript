const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

// By using sinon.spy, make sure the math used for 
// sendPaymentRequestToApi(100, 20) is the same as
// Utils.calculateNumber('SUM', 100, 20) 
// (validate the usage of the Utils function)

describe('sendPaymentRequestToApi', () => {
  it('validate the usage of the Utils function', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const total = sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(total).to.equal(120);
    spy.restore();
  });
});
