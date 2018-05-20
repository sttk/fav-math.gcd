(function(){
'use strict';


var expect = chai.expect;



var gcd = fav.math.gcd;

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || (Math.pow(2, 53) - 1);
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);

describe('fav.math.gcd', function() {

  it('Should calculate greatest common divisor when x == y', function() {
    expect(gcd(1, 1)).to.equal(1);
    expect(gcd(-1, -1)).to.equal(1);
    expect(gcd(1, -1)).to.equal(1);
    expect(gcd(-1, 1)).to.equal(1);

    expect(gcd(123, 123)).to.equal(123);
    expect(gcd(-123, -123)).to.equal(123);
    expect(gcd(-123, 123)).to.equal(123);
    expect(gcd(123, -123)).to.equal(123);

    expect(gcd(MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)).to.equal(
      MAX_SAFE_INTEGER);
    expect(gcd(-MAX_SAFE_INTEGER, -MAX_SAFE_INTEGER)).to.equal(
      MAX_SAFE_INTEGER);
    expect(gcd(MAX_SAFE_INTEGER, -MAX_SAFE_INTEGER)).to.equal(
      MAX_SAFE_INTEGER);
    expect(gcd(-MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)).to.equal(
      MAX_SAFE_INTEGER);

    expect(gcd(MIN_SAFE_INTEGER, MIN_SAFE_INTEGER)).to.equal(
      Math.abs(MIN_SAFE_INTEGER));
    expect(gcd(-MIN_SAFE_INTEGER, MIN_SAFE_INTEGER)).to.equal(
      Math.abs(MIN_SAFE_INTEGER));
    expect(gcd(MIN_SAFE_INTEGER, -MIN_SAFE_INTEGER)).to.equal(
      Math.abs(MIN_SAFE_INTEGER));
    expect(gcd(-MIN_SAFE_INTEGER, -MIN_SAFE_INTEGER)).to.equal(
      Math.abs(MIN_SAFE_INTEGER));
  });

  it('Should calculate greatest common divisor when x > y', function() {
    expect(gcd(60, 36)).to.equal(12);
    expect(gcd(45, 30)).to.equal(15);
    expect(gcd(42, 28)).to.equal(14);
  });

  it('Should calculate greatest common divisor when x < y', function() {
    expect(gcd(36, 60)).to.equal(12);
    expect(gcd(30, 45)).to.equal(15);
    expect(gcd(28, 42)).to.equal(14);
  });

  it('Should return 1 when x == 1 or -1', function() {
    expect(gcd(1, 60)).to.equal(1);
    expect(gcd(-1, 60)).to.equal(1);
  });

  it('Should return 1 when y == 1 or -1', function() {
    expect(gcd(60, 1)).to.equal(1);
    expect(gcd(60, -1)).to.equal(1);
  });

  it('Should calculate greatest common divisor when x < 0', function() {
    expect(gcd(-60, 36)).to.equal(12);
    expect(gcd(-45, 30)).to.equal(15);
    expect(gcd(-42, 28)).to.equal(14);
  });

  it('Should calculate greatest common divisor when y < 0', function() {
    expect(gcd(60, -36)).to.equal(12);
    expect(gcd(45, -30)).to.equal(15);
    expect(gcd(42, -28)).to.equal(14);
  });

  it('Should calculate greatest common divisor when x,y < 0', function() {
    expect(gcd(-60, -36)).to.equal(12);
    expect(gcd(-45, -30)).to.equal(15);
    expect(gcd(-42, -28)).to.equal(14);
  });

  it('Should return 1 when y == 0', function() {
    expect(gcd(1, 0)).to.equal(1);
    expect(gcd(-1, 0)).to.equal(1);
    expect(gcd(123, 0)).to.equal(1);
    expect(gcd(-123, 0)).to.equal(1);
  });

  it('Should return 1 when x == 0', function() {
    expect(gcd(0, 1)).to.equal(1);
    expect(gcd(0, -1)).to.equal(1);
    expect(gcd(0, 123)).to.equal(1);
    expect(gcd(0, -123)).to.equal(1);
  });

  it('Should return 1 when x == y == 0', function() {
    expect(gcd(0, 0)).to.equal(1);
    expect(gcd(-0, -0)).to.equal(1);
    expect(gcd(-0, 0)).to.equal(1);
    expect(gcd(0, -0)).to.equal(1);
  });

});

})();
