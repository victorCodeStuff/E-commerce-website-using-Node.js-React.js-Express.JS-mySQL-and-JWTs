const bcrypt = require("bcrypt")
const db = require("../config/Database")
const mysql = require("mysql")

async function userCreation (){
    app.post("/createuser", async (req, res) => {
        const user = req.body.name;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const email = req.body.email;
      
        await db.getConnection(async (err, connection) => {
          if (err) {
            console.log(err);
            res.status(500);
            if (err) {
              throw err;
            }
      
            try {
            } catch (err) {
              console.log(err);
              res.status(500).send("error login user");
              connection.release();
            }
            res.send("err connecting to database");
          }
          try {
            const sqlSearch = "SELECT * FROM userInfo WHERE userName = ?";
            const searchQuery = mysql.format(sqlSearch, [user]);
      
            connection.query(searchQuery, async (err, result) => {
              if (err) {
                throw err;
              }
              console.log("Search result: ", result.length);
      
              if (result.length != 0) {
                console.log("User already exists");
                res.sendStatus(409);
              } else {
                const sqlInsert =
                  "INSERT INTO userInfo( userName, userPassword, userEmail) VALUES (?,?,?)";
                const insertQuery = mysql.format(sqlInsert, [
                  user,
                  hashedPassword,
                  email,
                ]);
                connection.query(insertQuery, (err, result) => {
                  if (err) {
                    throw err;
                  }
                  console.log("New User Created");
                  const userId = result.insertId
                  console.log("his id is:", userId);
                  res.json(
                   userId
                  );
                });
              }
              connection.release();
            });
          } catch (err) {
            console.log(err);
            res.status(500).send("error creating user");
          }
        });
      });
}
module.exports= userCreation
