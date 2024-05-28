const express = require("express");
const db = require("./config/Database.js");
const cors = require("cors");
const session = require("express-session");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const { json } = require("sequelize");
app = express();
app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

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
            console.log("his id is:", result.insertId);
            res.send("User Created Sucessfully");
          });
        }
        connection.release();
      });
    } catch (err) {
      console.err(err);
      res.status(500).send("error creating user");
    }
  });
});
// login authentication
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
            console.log("sucessfully logged");
            res.send("sucessfully logged");
            connection.release();
          } else {
            console.log("Password incorrect");
            connection.release();
          }
        }
      } catch (err) {
        console.log(err);
        connection.release();
      }
    });
    connection.release();
  });
});

port = process.env.PORT;
app.listen(port, () => console.log("The server is running at " + port));
