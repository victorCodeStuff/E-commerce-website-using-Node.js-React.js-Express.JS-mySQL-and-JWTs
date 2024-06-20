const db = require("../config/Database")
const mysql = require("mysql") 
 
async function  queryProducts(){

 app.get("/products", (req,res)=>{
    db.query("SELECT * FROM userDB.products", (err, results)=>{
        if (err) throw err;
        res.json(results)
    })
 })
}


module.exports = queryProducts;