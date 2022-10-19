const express = require("express");
const router = express.Router();
const {user} = require('../models');

router.get("/", async (req, res) => {
    //res.send("hello world");
    const listOfUsers = await user.findAll();
    res.json(listOfUsers);
});

router.post("/", async (req, res) => {
    const users = req.body; 
    await user.create(users);
    res.json(users);

});


module.exports = router