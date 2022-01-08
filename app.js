const express = require('express');
const mongoose = require('mongoose');
const sessionRoutes = require('./src/routes/session');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
let db;

if(process.env.NODE_ENV === "testing") {
    db = process.env.MONGODB_URI_TEST;
}else{
    db = process.env.MONGODB_URI
}

//MongoDB Atlas connection
mongoose
.connect(db)
.then(() => {
    console.log('Connected to Mongodb atlas');
    app.listen(port, () => {
        console.log('Server running ...');
    });
}).catch((error) => {
        console.error(error);
});

//Middleware
app.use(express.json());
app.use('/api',sessionRoutes);

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the api')
});

module.exports = app;