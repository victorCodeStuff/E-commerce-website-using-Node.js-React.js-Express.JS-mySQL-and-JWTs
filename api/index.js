const express = require("express");
const userCreation = require("./auth/userCreation.js")
const userLogin = require("./auth/userLogin.js")


app = express();
app.use(express.json());



userCreation(app);
userLogin(app);



port = process.env.PORT;
app.listen(port, () => console.log("The server is running at " + port));
