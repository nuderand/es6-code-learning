var supertest = require('supertest');
var should = require('should');

var server = supertest.agent('http://localhost:3000');

describe('REST API Unit test', function () {
  it('should return home page', function (done) {
    server
      .get('/')
      .expect('Content-type',/json/)
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done()
      });
  });
  
  it('should return users info', function (done) {
    server
      .get('/api/users')
      .expect('Content-type', /application\json/)
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        res.body[0].should.have.property('name');
        res.body.should.be.a.Array;
        res.body[0].name.should.equal('tobi');
        done();
      });
  });

  it('should return two number', function (done) {
    server
      .post('/add')
      .send({ num1: 10, num2: 20 })
      .expect('Content-type', /json/)
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        res.body.error.should.equal(false);
        res.body.data.should.equal(30);
        done();
      });
  });
});
