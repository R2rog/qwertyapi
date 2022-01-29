import express from 'express';
import sessionSchema from '../models/session.js';

const router = express.Router();

//create session
router.post("/new", (req, res) => {
    let sessions = req.body.sessions;
    if (sessions.length == 1) {
        console.log(sessions[0])
        const newSession = sessionSchema(sessions[0]);
        newSession.save()
        .then((data) => {
            res.status(200).json({ success: true, dataCreated: data });
        })
        .catch((error) => res.status(400).json({ success: false, message: error }));
    } else {
        console.table(sessions);
        sessionSchema.insertMany(sessions)
        .then(()=>{
            console.log('Data written');
            res.status(200).json({ success: true, message: 'Data created correctcly'});
        })
        .catch((error) => res.status(400).json({ success: false, message: error.message }));
    };
    res.status(200);
});

//Delete a session
router.delete("/delete/:id", async (req, res) => {
    const result = await sessionSchema.findByIdAndDelete({ _id: req.params.id });
    res.send(result);
});

export default router;