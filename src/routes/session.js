const express = require('express');
const sessionSchema = require('../models/session');

const router = express.Router();

//create session
router.post("/new",(req,res)=>{
    const session = sessionSchema(req.body);
    console.log('session = ', session);
    session.save()
    .then((data)=> { 
        res.status(200).json({success: true, dataCreated: data});
    })
    .catch((error)=> res.status(400).json({success:false, message: error}));
});

//Delete a session
router.delete("/delete/:id", async (req,res)=>{
    const result = await sessionSchema.findByIdAndDelete({_id:req.params.id});
    res.send(result);
});

module.exports = router;