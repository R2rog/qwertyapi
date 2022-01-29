import mongoose from 'mongoose';

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

export default mongoose.model('Session', sessionSchema);