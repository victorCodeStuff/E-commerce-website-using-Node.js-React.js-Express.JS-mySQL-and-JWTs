
const jwt = require("jsonwebtoken");

async function getUser() {
    app.get("/getuser", (req, res) => {
        const acessToken = req.query.acessToken;
        const secretKey = process.env.ACCESS_TOKEN_SECRET
    
        try {
          const decoded = jwt.verify(acessToken, secretKey);
          res.send(decoded.username)
         
        } catch (err) {
          console.error("Invalid JWT:", err.message);
         
        }
      });
}

module.exports = getUser;
