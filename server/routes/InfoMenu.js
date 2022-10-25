const express = require("express");
const router = express.Router();
const {menu} = require('../models');

//working
router.get("/getItem", async (req, res) => {
    //res.send("hello world");
    const listOfMenuItems = await menu.findAll();
    res.json(listOfMenuItems);
});

//working
router.get("/:BLD", async (req, res) => {
  //res.send("hello world");
  const BLD = req.params.BLD;
  const listOfMenuItems = await menu.findAll( {
    where: {
      BLD:BLD
    }
  });
  res.json(listOfMenuItems);
});


router.post("/postItem", async (req, res) => {
    const foodItems = req.body; 
    await menu.create(foodItems);
    res.json(foodItems);
});

exports.update = (req, res) => {
  const menuID = req.params.id;

  router.update(req.body, {
    where: { menuID: menuID }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${menuID}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + menuID
      });
    });
};





// router.post("/UpdateItem", async (req, res) => {
    
    
// });

// router.put("/UpdateItem/:menuID", async (req, res, next)=> {
//   const foodItems = req.body; 
//   console.log("OKKKKKK")
//     await menu.create(foodItems, {
     
//       where: {
        
//         menuID: req.params.menuID
//       }
//     }
//       );

    // menu.update(
    //   {itemName: req.body.itemName,},
    //   {where: req.params.menuID}
    // )
    // .then(function(rowsUpdated) {
    //   res.json(rowsUpdated)
    // })
    // .catch(next)
   //})

// router.delete("/", async (req, res) => {
//     const menuID = menuID.req.body; 
//     await menu.delete(menuID);
//     res.json(menuID);

// });


module.exports = router