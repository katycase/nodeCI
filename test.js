const { add } = require('./index.js');
const assert = require('assert'); 

describe('add function', function() {
  it('should return the sum of two numbers', function() {
    assert.equal(add(2, 3), 5);
  });
});

describe('add function', function() {
    it('should return 0', function() {
      assert.equal(add(-2, 2), 0);
    });
});
  
