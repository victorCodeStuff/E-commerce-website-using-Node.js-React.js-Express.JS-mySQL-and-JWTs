const express = require("express");
const userCreation = require("./auth/userCreation.js");
const userLogin = require("./auth/userLogin.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const verifyToken = require("./auth/verifyToken.js");
const queryProduct = require("./common/products.js");
const queryProductDetails = require("./common/productDetails.js");
const querySearches = require("./common/searchSystem.js");
const getUser = require("./common/getCurrentUser.js");
const queryCustomProducts = require("./common/customHomeProducts.js")

app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(cookieParser());

userCreation(app);
userLogin(app);
verifyToken(app);
queryProduct(app);
queryProductDetails(app);
querySearches(app);
getUser(app);
queryCustomProducts(app);

app.get("/", (req, res) => {
  
});

port = process.env.PORT;
app.listen(port, () => console.log("The server is running at " + port));
