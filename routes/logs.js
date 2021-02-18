const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');


const Log = require('../models/Log')

//@desc Get Logs
//@route GET api/logs
router.get('/', async (req, res) => {

    try {
        const logs = await Log.find();
        res.json(logs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

//@desc Add Log
//@route POST api/logs
router.post('/', [
    check('message','Please add a message').not().isEmpty(),
    check('tech', 'Please add a technician').not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    const { message, tech, attention } = req.body;

    try {
        const newLog = new Log({
            message,
            tech,
            attention
        })

        const log = await newLog.save();
        res.json(log);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

//@desc Update Log
//@route PUT api/logs/:id
router.put('/:id', async (req, res) => {
    const { message, tech, attention } =  req.body;

    //Build Log Object
    const logFields = {};
    if(message) logFields.message = message;
    if(tech) logFields.tech = tech;
    if(attention) logFields.attention = attention;

    try {
        let log = await Log.findById(req.params.id)
        //Check if log exists
        if(!log){
            return res.status(404).json({ msg: 'Log not found'})
        }

        //Update the log
        log = await Log.findByIdAndUpdate(req.params.id,
            { $set: logFields },
            { new: true }
            );
        res.json(log);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

//@desc Delete Log
//@route api/logs/:id
router.delete('/:id', async (req, res) => {

    try {
        let log = await Log.findById(req.params.id)
        //Check if log exists
        if(!log){
            return res.status(404).json({ msg: 'Log not found'})
        }

        //Delete the log
        await Log.findByIdAndRemove(req.params.id);
        res.json({ msg: "Log Removed" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;