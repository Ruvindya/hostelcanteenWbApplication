const express = require("express");
const router = express.Router();
const {menu} = require('../models');

//working all items
router.get("/getItem", async (req, res) => {
    //res.send("hello world");
    const listOfMenuItems = await menu.findAll();
    res.json(listOfMenuItems);
});


//working    
router.get("/byid/:menuID", async (req, res) => {
  //res.send("hello world");
  const menuID= req.params.menuID;
  const listOfMenuItems = await menu.findAll( {
    where: {
      menuID:menuID
    }
  });
  res.json(listOfMenuItems);
});

//working    
router.get("/bybld/:BLD", async (req, res) => {
  //res.send("hello world");
  const BLD= req.params.BLD;
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

//working with postman
router.put("/UpdateItem/:menuID", async (req, res, next)=> {
  const {menuID} = req.params; 
  const event = await menu.findByPk(menuID)
  const updateEvent = await  event.update(req.body )
  //await menu.fi
  
  res.json(updateEvent) 
 })

//  $set:{BLD: req.body.BLD,
//   itemName:req.body.itemName,
//   price: req.body.price,
//   isAvailabe:req.body.isAvailabe}


// exports.update = (req, res) => {
//   const menuID = req.params.id;

//   router.update(req.body, {
//     where: { menuID: menuID }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Tutorial with id=${menuID}. Maybe Tutorial was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + menuID
//       });
//     });
// };





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


//working
router.delete("/delete/:menuID", async (req, res) => {
  const menuID = req.params.menuID; 
  await menu.destroy({
      where: { menuID: menuID },
    });

});

module.exports = router