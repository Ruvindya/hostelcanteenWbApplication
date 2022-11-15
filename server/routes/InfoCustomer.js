const express = require("express");
const router = express.Router();
const {customer} = require('../models');

//methana meka hadanna thiyanava

router.get("/getcustomer", async (req, res) => {

    const listOfcustomer = await customer.findAll();
    res.json(listOfcustomer);
});


router.get("/getcustomerbyid/:cusId", async (req, res) => {
    const cusId = req.params.cusId;
    const getCustomer = await customer.findAll( {
        where: {
            cusId:cusId
        }
      });
    res.json(getCustomer);

});

router.get("/getcustomerbyphoneNo/:phoneNo", async (req, res) => {
    const phoneNo = req.params.phoneNo;
    const getCustomer = await customer.findAll( {
        where: {
            phoneNo:phoneNo
        }
      });
    res.json(getCustomer);
});


router.post("/postcustomer", async (req, res) => {
    const {cusName, block, roomNo, phoneNo} = req.body;
    const newcustomer = await customer.create({
        cusName:cusName,
        block: block,
        roomNo:roomNo,
        phoneNo:phoneNo,
    });
    res.json(newcustomer);

});

module.exports = router