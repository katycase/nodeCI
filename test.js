import { add } from "./index.js";
import assert from "assert";

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
  
