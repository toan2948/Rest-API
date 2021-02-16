const express = require ('express');

const router = express.Router();

const User = require ('../models/user')

router.get('/', async (req,res) => {
    const getUsers = await User.find();
    //res.send(getUsers);
    res.json(getUsers);
});

router.post('/', async (req,res) => {
    const newUser = new User({
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
    const getUser = await User.find({name:name});

    res.json(getUser);
});

router.delete('/:name', async (req,res) => {
    const name = req.params.name;
    const getUser = await User.findOneAndDelete({name:name});

    res.json(getUser);

});

router.patch('/:name', async (req,res) => {
     
        const name = req.params.name;
        const getUser = await User.findOne({name:name});
        getUser.tech = req.body.tech;
        await getUser.save();
        res.json(getUser);
    
});


module.exports = router;

