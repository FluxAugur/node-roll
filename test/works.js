var should = require('should')
  , srand = require('srand')
  , roll = require('../lib')
  , randomSet = [
    .24,
    .62
  ]
  , randomPointer = 0;

// can only test this library if we make things not random
roll.random = function(){
  return randomSet[randomPointer++];
};

describe('roll', function(){
  beforeEach(function(){
    randomPointer = 0;
  });

  it('addition works', function(){
    var result = roll.roll('2d20+3');
    console.log(result);
    result.result.should.equal(21);
  });

  it('subtraction works', function(){
    var result = roll.roll('2d20-3');
    console.log(result);
    result.result.should.equal(15);
  });
});
