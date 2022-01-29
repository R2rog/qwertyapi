import mongoose from 'mongoose';
import supertest from 'supertest';
import dotenv from 'dotenv';
import {app, server} from '../app.js';
import sessionModel from '../src/models/session.js';

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

const sessions = {
    sessions:[
        {
            prod_id: 'testing',
            date: new Date().toISOString(),
            location: "AQ",
            os: 'linux',
            length: 67,
            first: 0 
        },
        {
            prod_id: 'testing',
            date: new Date().toISOString(),
            location: "PT",
            os: 'darwin',
            length: 35,
            first: 1 
        }
    ]
}

test('Posting a single session should return success true:', async ()=>{
    await api
    .post("sessions/new")
    .send(session)
    .then((res)=>{ expect(res.body.success).to.be.equal(true);})
    .catch((err)=> console.error(err));
});

test('Posting an array of sessions should return success true:', async ()=>{
    await api
    .post("sessions/new")
    .send(sessions)
    .then((res)=>{ expect(res.body.success).to.be.equal(true);})
    .catch((err)=> console.error(err));
});

afterAll(async ()=>{
    await sessionModel.deleteMany({ prod_id: 'testing' });
    await mongoose.disconnect();
    server.close();
});
