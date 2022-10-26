const express = require('express');
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(express.json());
app.use(cors());

//Routes
const InfoUserRouter = require("./routes/InfoUser");
app.use("/InfoUser", InfoUserRouter);

const InfoMenuRouter = require("./routes/InfoMenu");
app.use("/InfoMenu", InfoMenuRouter);

const InfoCustomerRouter = require("./routes/InfoCustomer");
app.use("/InfoCustomer", InfoCustomerRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server has started on port 3001");
    }); 

});



