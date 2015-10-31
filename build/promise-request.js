'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _events = require('events');

var config = {
  uri: {
    animals: 'http://localhost:5000/api/animals',
    users: 'http://localhost:5000/api/users'
  }
};

var PromiseRequest = (function (_EventEmitter) {
  _inherits(PromiseRequest, _EventEmitter);

  function PromiseRequest() {
    _classCallCheck(this, PromiseRequest);

    _get(Object.getPrototypeOf(PromiseRequest.prototype), 'constructor', this).call(this);
  }

  _createClass(PromiseRequest, [{
    key: 'animals',
    value: function animals() {
      _request2['default'].get(config.uri.animals).on('response', function (response) {
        if (response.statusCode == 200) {
          console.log(response.headers['content-type']);
        }
      }).pipe(_fs2['default'].createWriteStream('./../data/animal.json'));
    }
  }, {
    key: 'users',
    value: function users() {
      return new Promise(function (resolve, reject) {
        (0, _request2['default'])(config.uri.users, function (error, response, body) {
          if (!error || response.statusCode == 200) {
            console.log(JSON.parse(body));
            resolve(JSON.parse(body));
          }
          reject(new Error(response.statusCode));
        });
      });
    }
  }], [{
    key: 'ageList',
    value: function ageList(value) {
      var ages = [];
      value.forEach(function (element, index, array) {
        ages.push(element.age);
      });
      return ages;
    }
  }]);

  return PromiseRequest;
})(_events.EventEmitter);

exports['default'] = PromiseRequest;

var ageAverage = function ageAverage(value) {
  var sum = value.reduce(function (a, b) {
    return a + b;
  });
  return Math.floor(sum / value.length);
};

var pr = new PromiseRequest();
pr.animals();

pr.users().then(PromiseRequest.ageList).then(ageAverage).then(function (value) {
  console.log('Avarage age is', value);
})['catch'](function (error) {
  console.error(error);
});
module.exports = exports['default'];
