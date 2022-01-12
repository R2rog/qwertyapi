const mongoose = require('mongoose');
const supertest = require('supertest');
const dotenv = require('dotenv');
const {app, server} = require('../app');
const sessionModel = require('../src/models/session');

const api = supertest(app);
dotenv.config();

const session = {
    prod_id: 'testing',
    date: new Date().toISOString(),
    location: "AQ",
    os: 'linux',
    length: 100,
    first: 0
};

test('Posting sessions should return success true:', async ()=>{
    await api
    .post("/api/session")
    .send(session)
    .then((res)=>{ expect(res.body.success).to.be.equal(true);})
    .catch((err)=> console.error(err));
});

afterAll(async ()=>{
    await sessionModel.deleteOne({ prod_id: 'testing' });
    await mongoose.disconnect();
    server.close();
});
