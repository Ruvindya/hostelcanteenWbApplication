const express = require("express");
const router = express.Router();
const {customer} = require('../models');

//

router.get("/getcustomer", async (req, res) => {
    //res.send("hello world");
    const listOfcustomer = await customer.findAll();
    res.json(listOfcustomer);
});


router.post("/postcustomer", async (req, res) => {
    const customers = req.body; 
    await customer.create(customers);
    res.json(customers);

});

module.exports = router