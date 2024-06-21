const db = require("../config/Database")
const mysql = require("mysql") 
 
async function  queryProducts(){


 app.get("/products", (req,res)=>{
   const categoriesApplied = req.query.filteringSystem
   const sql = "SELECT * FROM userDB.products WHERE category = ? OR category = ? OR category = ? OR category = ?";
   
   
    db.query(sql, categoriesApplied, (err, results)=>{
        if (err) throw err;
        res.json(results)
        console.log(categoriesApplied)
    })
 })
}


module.exports = queryProducts;