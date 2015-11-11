var assert = require('assert'),
    Car = require('./../build/car.js');

console.log(Car);

describe('Car', function () {
  describe('#constructor', function () {
    it('should return argument propery number', function () {
      var opts = { number: 10 };
      var car = new Car(opts);
      assert.equal(opts.number, car._number);
    });
    it('should return double number', function () {
      var opts = { number: 10 };
      var car = new Car(opts);
      assert.equal(opts.number * 2, car.double);
    });
    it('should not return double number', function () {
      var opts = { number: 20 };
      var car = new Car(opts);
      assert.notEqual(opts.number , car.double);
    });
  });
});
