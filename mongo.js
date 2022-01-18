const mongoose = require('mongoose');
require('dotenv').config();

let db;

if(process.env.NODE_ENV === "testing"||process.env.NODE_ENV === "development") {
    db = process.env.MONGODB_URI_TEST;
}else{
    db = process.env.MONGODB_URI
};

//MongoDB Atlas connection
mongoose
.connect(db)
.then(() => {
    console.log('Connected to Mongodb atlas');
}).catch((error) => {
    console.error(error);
});

process.on('SIGINT', ()=> {
    mongoose.connection.close(()=>{
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
});

process.on('SIGTERM', ()=> {
    mongoose.connection.close(()=>{
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
});