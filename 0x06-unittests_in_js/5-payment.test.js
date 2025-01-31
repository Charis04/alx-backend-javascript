const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

// Inside the same describe, create 2 tests:
// The first test will call sendPaymentRequestToAPI with 100, and 20:
// Verify that the console is logging the string The total is: 120
// Verify that the console is only called once
// The second test will call sendPaymentRequestToAPI with 10, and 10:
// Verify that the console is logging the string The total is: 20
// Verify that the console is only called once
// You should use only one spy to complete this exercise
// You should use a beforeEach and a afterEach hooks to complete this exercise

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });
  
  it('should return 120', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('should return 20', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
