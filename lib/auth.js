'use strict'

import { EventEmitter } from 'events';

class Auth {
  constructor(request) {
    this.request = request;
    this.hasAuth = false;
    this.sendAuth = false;
    this.bearerToken = null;
    this.user = null;
    this.pass = null;
  }

  // prototype methods
  basic(user, pass, sendImmediately) {
    let self = this;
    if (typeof user !== 'string') {
      self.request.emit('error', new Error('auth() received invalid user or password'))
    }
    self.user = user;
    self.pass = pass;
    self.hasAuth = true;
    let header = user + ':' + (pass || '');
    if (sendImmediately || typeof sendImmediately === 'undefined')  {
      let authHeader = 'Basic' + Helper.toBase(header);
      self.sendAuth = true;
      return authHeader;
    }
  }
}

class Request extends EventEmitter {
  constructor() {
    super();
    this.method = 'GET';
    this.uri = 'http://user:pass@localhost:6767/test2/';
    this.auth = {
      'user': 'user',
      'pass': 'pass',
      'sendImmediately': true
    }
    this.on('error', this.occurError);
  }

  occurError() {
    console.log('error is Occuring');
  }
}

class Helper {
  constructor() {
    this.name = 'Helper methods';
  }

  static toBase(str) {
    return (new Buffer(str || '', 'utf8')).toString('base64');
  }
}

console.log(Helper.toBase('testtest'));

var request = new Request();
console.log(request);

var a = new Auth(request);
console.log(a.basic(request.auth.user, request.auth.pass, request.auth.sendImmediately));
a.basic(10, request.auth.pass, request.auth.sendImmediately); // error
