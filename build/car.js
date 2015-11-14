'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _events = require('events');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var Car = (function (_EventEmitter) {
  _inherits(Car, _EventEmitter);

  function Car(opts) {
    _classCallCheck(this, Car);

    _get(Object.getPrototypeOf(Car.prototype), 'constructor', this).call(this);
    this.number(opts.number || 100);
    this.size(opts.size || [100, 200]);
  }

  _createClass(Car, [{
    key: 'number',
    value: function number(v) {
      if (!arguments.length) return _number;
      this._number = v;
      return this;
    }
  }, {
    key: 'size',
    value: function size(v) {
      if (!arguments.length) return _size;
      this._size = _lodash2['default'].map(v, function (n) {
        return n * 10;
      });

      return this;
    }
  }, {
    key: 'double',
    get: function get() {
      return this._number * 2;
    }
  }]);

  return Car;
})(_events.EventEmitter);

exports['default'] = Car;

var opts = { number: 10, size: [10, 20] };
var cat = new Car(opts);
module.exports = exports['default'];
