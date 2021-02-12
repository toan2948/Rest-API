const express = require ('express');

const router = express.Router();

const users = require ('../models/user')

router.get('/', async (req,res) => {
    const getUsers = await users.find();
    //res.send(getUsers);
    res.json(getUsers);
});


router.post('/', async (req,res) => {
    const newUser = new users({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });

    const user1 = await newUser.save();
    //res.send(getUsers);
    res.json(user1);
});

router.get('/:name', async (req,res) => {
    const name = req.params.name;
    const getUser = await users.find({name:name});

    res.json(getUser);
});

router.delete('/:name', async (req,res) => {
    const name = req.params.name;
    const getUser = await users.findOneAndDelete({name:name});

    res.json(getUser);
});

router.patch('/:name', async (req,res) => {
    const name = req.params.name;
    const getUser = await users.find({name:name});
    getUser.tech = req.body.tech;
    getUser.save();
    res.json(getUser);
});


module.exports = router;

