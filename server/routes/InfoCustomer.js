const express = require("express");
const router = express.Router();
const {customer} = require('../models');

//

router.get("/getcustomer", async (req, res) => {

    const listOfcustomer = await customer.findAll();
    res.json(listOfcustomer);
});

router.get("/getcustomer/:cusId", async (req, res) => {
    const cusId = req.params.cusId;
    const listOfcustomer = await customer.findAll( {
        where: {
            cusId:cusId
        }
      });
    res.json(listOfcustomer);
});


router.post("/postcustomer", async (req, res) => {
    const customers = req.body; 
    await customer.create(customers);
    res.json(customers);    //not sure
});

module.exports = router