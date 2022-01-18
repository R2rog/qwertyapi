require('./mongo');
const express = require('express');
const sessionRoutes = require('./src/routes/session');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//Middleware
app.use(express.json());
app.use('/sessions',sessionRoutes);

//Routes
app.get('/', (req,res) => {
    res.send('Welcome to the api o(^▽^)o')
});

const server = app.listen(port, () => {
    console.log('Server running o(^▽^)o ');
});

module.exports = {app,server};