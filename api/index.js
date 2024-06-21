const express = require("express");
const userCreation = require("./auth/userCreation.js");
const userLogin = require("./auth/userLogin.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const verifyToken = require("./auth/verifyToken.js")
const queryProduct = require("./common/products.js")
app = express();
app.use(express.json());

app.use( cors({
    origin: ["http://localhost:5173"], 
     credentials: true
    }));

    app.use(cookieParser());

userCreation(app);
userLogin(app);
verifyToken(app)
queryProduct(app)
app.get("/",(req,res)=>{
  
  res.send("hello")
})



port = process.env.PORT;
app.listen(port, () => 
console.log("The server is running at " + port));
