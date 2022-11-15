// const express = require("express");
// const router = express.Router();
// const {order} = require('../models');
// //
// router.post("/postOder", async (req, res) => {
//     const {
     
//       BLD:BLD,
//       totAmount:totAmount,
//     } = req.body; 

//     const newOder = await order.create({
//         BLD:BLD,
//         totAmount:totAmount,

//     });
//     res.json(newOder);
// });


// router.get("/getOrder", async (req, res) => {
//     //res.send("hello world");
//     const listOfOrder= await order.findAll();
//     res.json(listOfOrder);
// });


// router.get("/getOrderbyOderNo/:oderNo", async (req, res) => {
//     //res.send("hello world");
//     const oderNo = req.params.oderNo;
//     const listOfOrder = await order.findAll( {
//       where: {
//         oderNo:oderNo
//       }
//     });
//     res.json(listOfOrder);
//   });

//   module.exports = router