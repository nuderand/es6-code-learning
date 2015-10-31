class Auth {
  constructor(request) {
    this.request = request;
    console.log(request);
  }

  // prototype methods
  basic(user, pass, sendImmediately) {
    let self = this;
    if (typeof user !== 'string') {
    }
    self.user = user;
    self.pass = pass;

    console.log(self);
    console.log(self.user);
    console.log(self.pass);
    return 'hello';
  }

  // static methods
  static distance(a, b) {
    if (typeof a == 'number') {
      return a + b;
    }
  }
}

var request = {
  'method': 'GET',
  'uri': 'http://user:pass@localhost:6767/test2/',
  'auth': {
    'user': 'user',
    'pass': 'pass',
    'sendImmediately': false
  }
}

var a = new Auth(request);
a.basic(request.auth.user, request.auth.pass, request.auth.sendImmediately);

// static
console.log(Auth.distance(1, 5));
