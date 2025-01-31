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

// Add a test suite for the cart page:
// Correct status code when :id is a number?
// Correct status code when :id is NOT a number (=> 404)?
// etc.
describe('Cart page', function () {
  const baseUrl = 'http://localhost:7865/cart/';

  it('should return status 200 when :id is a number', function (done) {
    request(baseUrl + '123', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Payment methods for cart 123" when :id is 123', function (done) {
    request(baseUrl + '123', function (error, response, body) {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return status 404 when :id is NOT a number', function (done) {
    request(baseUrl + 'abc', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should have correct content-type header when :id is a number', function (done) {
    request(baseUrl + '123', function (error, response, body) {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('should have a valid body when :id is a number', function (done) {
    request(baseUrl + '123', function (error, response, body) {
      expect(body).to.be.a('string');
      done();
    });
  });
});

// Add a test suite for the /login endpoint
describe('/login endpoint', function () {
  const url = 'http://localhost:7865/login';

  it('should return status 200', function (done) {
    request.post(url, { json: { userName: 'John' } }, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome John" when userName is John', function (done) {
    request.post(url, { json: { userName: 'John' } }, function (error, response, body) {
      expect(body).to.equal('Welcome John');
      done();
    });
  });

  it('should have correct content-type header', function (done) {
    request.post(url, { json: { userName: 'John' } }, function (error, response, body) {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});

// Add a test suite for the /available_payments endpoint
describe('/available_payments endpoint', function () {
  const url = 'http://localhost:7865/available_payments';

  it('should return status 200', function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct payment methods', function (done) {
    request(url, function (error, response, body) {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });

  it('should have correct content-type header', function (done) {
    request(url, function (error, response, body) {
      expect(response.headers['content-type']).to.include('application/json');
      done();
    });
  });

  it('should return a valid JSON object', function (done) {
    request(url, function (error, response, body) {
      expect(() => JSON.parse(body)).to.not.throw();
      done();
    });
  });
});

