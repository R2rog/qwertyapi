const expect = require('chai').expect;
const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../app');
const sessionModel = require('../src/models/session');

dotenv.config();

const session = {
    prod_id: 'testid',
    date: new Date().toISOString(),
    location: "AQ",
    os: 'linux',
    length: 100,
    first: 0
};

/*Giving time to connect to the data base. 
before((done)=>{
    this.timeout(10000);
    setTimeout(done, 2000);
});*/

describe("POST SESSIONS", () => {
    it('Should return success true:', (done) =>{
        setTimeout(()=>{
            request(app)
            .post("/api/session")
            .send(session)
            .then((res)=>{
                expect(res.body.success).to.be.equal(true);
                done();
            })
            .catch((err)=> done(err));
        }, 20000);
    });
});

/*Deleting the test document from the collection
after(async () => {
    try {
      await sessionModel.deleteOne({ prod_id: 'testid' });
    } catch (err) {
      console.error(err);
    }
});*/