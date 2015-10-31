var assert = require('assert'),
    HttpServer = require('./../build/http-server.js');

describe('HttpServer', function () {
  describe('name', function () {
    it('should return http-server when instance is created', function () {
      var server = new HttpServer(); 
      assert.equal('http-server', server.name);
    });
  });
});
