const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');


const Tech = require('../models/Tech')

//@desc Get Tech
//@route GET api/techs
router.get('/', async (req, res) => {

    try {
        const techs = await Tech.find();
        res.json(techs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

//@desc Add Tech
//@route POST api/techs
router.post('/', [
    check('firstName','Please add a first name').not().isEmpty(),
    check('lastName', 'Please add a last name').not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    const { firstName, lastName } = req.body;

    try {
        const newTech = new Tech({
            firstName,
            lastName
        })

        const tech = await newTech.save();
        res.json(tech);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})


//@desc Delete Tech
//@route api/techs/:id
router.delete('/:id', async (req, res) => {

    try {
        let tech = await Tech.findById(req.params.id)
        //Check if tech exists
        if(!tech){
            return res.status(404).json({ msg: 'Technician not found'})
        }

        //Delete the tech
        await Tech.findByIdAndRemove(req.params.id);
        res.json({ msg: "Technician Removed" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})



module.exports = router;