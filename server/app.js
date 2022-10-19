const express = require('express');
const app = express();
app.use(express.json());

const db = require("./models");

//Routes
const InfoUserRouter = require("./routes/InfoUser");
app.use("/InfoUser", InfoUserRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server has started on port 3001");
    }); 

});



