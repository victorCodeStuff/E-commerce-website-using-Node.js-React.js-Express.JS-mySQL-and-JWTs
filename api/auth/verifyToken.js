const jwt = require("jsonwebtoken");

async function verifyToken() {
  app.post("/verifyToken", (req, res) => {
    const token = req.body.token;
    const secretKey = process.env.ACCESS_TOKEN_SECRET

    try {
      const decoded = jwt.verify(token, secretKey);
      console.log(decoded);
      res.send(login=true)
    } catch (err) {
      console.error("Invalid JWT:", err.message);
      res.send(login = false)
   
    }
  });
}

module.exports = verifyToken;
