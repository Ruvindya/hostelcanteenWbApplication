const express = require("express");
const router = express.Router();
const {user} = require('../models');


//working
router.get("/getUser", async (req, res) => {
    //res.send("hello world");
    const listOfUsers = await user.findAll();
    res.json(listOfUsers);
});

//working
router.post("/postUser", async (req, res) => {
    const users = req.body; 
    await user.create(users);
    res.json(users);

});



router.delete("/", async (req, res) => {
    const userId = userId.req.body; 
    await user.delete(userId);
    res.json(userId);

});


// exports.update = (req, res) => {
//     const userId = req.params.userId;
  
//     router.update(req.body, {
//       where: { userId: userId }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Tutorial was updated successfully."
//           });
//         } else {
//           res.send({
//             message: `Cannot update Tutorial with id=${userId}. Maybe Tutorial was not found or req.body is empty!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Tutorial with id=" + userId
//         });
//       });
//   };

module.exports = router