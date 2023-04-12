//this file is used to test the backend using mocha and chai

//importing the chai library
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

//testing the get request

describe('GET /', () => {
    it('it should GET all the books', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
            done();
          });
    });
});