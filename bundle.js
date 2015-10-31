'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Auth = (function () {
  function Auth(request) {
    _classCallCheck(this, Auth);

    this.request = request;
    console.log(request);
  }

  _createClass(Auth, [{
    key: 'basic',
    value: function basic(user, pass, sendImmediately) {
      var self = this;
      if (typeof user !== 'string') {
        self.user = user;
        self.pass = pass;
      }
    }
  }]);

  return Auth;
})();

var request = {
  'method': 'GET',
  'uri': 'http://user:pass@localhost:6767/test2/'
};

debugger;

var a = new Auth(request);
