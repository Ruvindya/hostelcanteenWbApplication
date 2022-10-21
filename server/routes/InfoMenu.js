const express = require("express");
const router = express.Router();
const {menu} = require('../models');

router.get("/getItem", async (req, res) => {
    //res.send("hello world");
    const listOfMenuItems = await menu.findAll();
    res.json(listOfMenuItems);
});

router.post("/postItem", async (req, res) => {
    const foodItems = req.body; 
    await menu.create(foodItems);
    res.json(foodItems);
});

router.post("/UpdateItem", async (req, res) => {
    
    
});

router.put("/UpdateItem", function (req, res, next) {
    menu.update(
      {itemName: req.body.itemName,},
      {where: req.params.menuID}
    )
    .then(function(rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch(next)
   })

// router.delete("/", async (req, res) => {
//     const menuID = menuID.req.body; 
//     await menu.delete(menuID);
//     res.json(menuID);

// });


module.exports = router