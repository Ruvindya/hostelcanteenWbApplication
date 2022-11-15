const express = require("express");
const router = express.Router();
const {orderDetails} = require('../models');
//
router.post("/postOderDetails", async (req, res) => {
    const {
      menuID:menuID,
      qty:qty,
      totPrice:totPrice,
      orderId:cusId,
    } = req.body; 

    const newOderDetails = await orderDetails.create({
      menuID:menuID,
      qty:qty,
      totPrice:totPrice,
      orderId:cusId,
    });
    res.json(newOderDetails);
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