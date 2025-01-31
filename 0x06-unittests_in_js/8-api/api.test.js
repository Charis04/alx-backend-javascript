const request = require('request');
const { expect } = require('chai');

// Create one suite for the index page:
// Correct status code?
// Correct result?
// Other?
describe('Index page', function () {
  const url = 'http://localhost:7865/';

  it('should return status 200', function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system"', function (done) {
    request(url, function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should have correct content-type header', function (done) {
    request(url, function (error, response, body) {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('should have a valid body', function (done) {
    request(url, function (error, response, body) {
      expect(body).to.be.a('string');
      done();
    });
  });
});
