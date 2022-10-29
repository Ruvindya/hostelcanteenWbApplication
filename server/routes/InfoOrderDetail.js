const express = require("express");
const router = express.Router();
const {orderDetails} = require('../models');
//
router.post("/postOderDetails", async (req, res) => {
    const foodItems = req.body; 
    await menu.create(foodItems);
    res.json(foodItems);
});


router.get("/getOrder", async (req, res) => {
    //res.send("hello world");
    const listOfMenuItems = await orderDetails.findAll();
    res.json(listOfMenuItems);
});


router.get("/getOrder/:BLD", async (req, res) => {
    //res.send("hello world");
    const BLD = req.params.BLD;
    const listOfOrderItems = await orderDetails.findAll( {
      where: {
        BLD:BLD
      }
    });
    res.json(listOfOrderItems);
  });

  module.exports = router