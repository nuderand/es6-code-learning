var assert = require('assert'),
    Car = require('./../build/car.js');

console.log(Car);

describe('Car', function () {
  describe('#constructor', function () {
    it('should return argument propery number', function () {
      var number = 10;
      var car = new Car(number);
      assert.equal(number, car.number);
    });
    it('should return double number', function () {
      var number = 10;
      var car = new Car(number);
      assert.equal(number * 2, car.double);
    });
  });
});
