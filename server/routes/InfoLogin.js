const express = require('express');
const {Login} = require('../models');

const router = express.Router();

//get route
router.get("/", async (req,res)=>{
       const listOfPosts = await Posts.findAll();
       res.json(listOfPosts); 
});

//post route
router.post("/login/",async (req,res) =>{
    
    const post = req.body;
    await user.create(post); 
    res.json(post);
});


module.exports = router