const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
    prod_id:{
        type: String,
        required: true
    },
    date: Date,
    location: String,
    os: String,
    length: Number,
    first: Boolean
});

module.exports = mongoose.model('Session', sessionSchema);