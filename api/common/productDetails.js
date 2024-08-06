
const db = require("../config/Database");

async function  queryProductsDetails() {
  app.get("/productsdetails", async (req, res) => {

    const productName = req.query.productName;
    const productId = req.query.productId;
// if you want to test this through POSTMAN change "query" to body
 
    const sql = "SELECT * FROM userDB.products WHERE productsName = ? and Id = ?";
    try {
      const [results] = await db.promise().query(sql, [productName , productId]);
     res.json(results);
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });
}

module.exports = queryProductsDetails;