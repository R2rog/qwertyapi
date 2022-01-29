import('./mongo.js');
import('dotenv/config');
import express  from 'express';
import path from 'path';
import sessionRoutes from './src/routes/session.js';


const app = express();
const port = process.env.PORT || 8080;

//Middleware
app.use(express.json());
app.use('/sessions',sessionRoutes);
app.use(express.static('./dist'));

//Routes
app.get('/', (req,res) => {
    console.log('Welcome to the qwertysite');
});

const server = app.listen(port, () => {
    console.log('Server running o(^▽^)o ');
});

export default {app,server};
//module.exports = {app,server};