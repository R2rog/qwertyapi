const express = require('express');
const sessionSchema = require('../models/session');

const router = express.Router();

//create session
router.post("/session",(req,res)=>{
    const session = sessionSchema(req.body);
    session.save()
    .then((data)=> { 
        res.status(200).json({success: true, dataCreated: data});
    })
    .catch((error)=> res.status(400).json({success:false, message: error}));
});

module.exports = router;