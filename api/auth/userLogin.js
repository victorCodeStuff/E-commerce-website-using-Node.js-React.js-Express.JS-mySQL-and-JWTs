const bcrypt = require("bcrypt")
const db = require("../config/Database")
const mysql = require("mysql")
const generateAccessToken = require("../common/generateAcessToken")
const session = require('express-session');

async function userLogin (){
app.post("/login", async (req, res, err) => {
    const user = req.body.name;
    const password = req.body.password;
  
    await db.getConnection(async (err, connection) => {
      if (err) {
        console.log(err);
        res.status(500);
      }
      const sqlSearch = "SELECT * FROM userInfo WHERE userName = ? ";
      const searchQuery = mysql.format(sqlSearch, [user]);
      connection.query(searchQuery, async (err, results) => {
        if (err) {
          throw err;
        }
        try {
          if (results.length == 0) {
            console.log("User doesn't exists");
            res.sendStatus(404);
          } else {
            const hashedPassword = results[0].userPassword;
  
            if (await bcrypt.compare(password, hashedPassword)) {
              const token = generateAccessToken({ username: req.body.name });
              console.log("sucessfully logged\n your token is:"+ token);
              res.send("Sucessfully logged and your login token is:"+token);
              
              connection.release();
            } else {
              const passErrMessage = "Incorrect Password";
              console.log(passErrMessage);

              res.send(passErrMessage);
              connection.release();
            }
  
            connection.release();
          }
          connection.release();
        } catch (err) {
          console.log(err);
  
          connection.release();
        }
      });
      connection.release();
    });
  });
}

module.exports = userLogin