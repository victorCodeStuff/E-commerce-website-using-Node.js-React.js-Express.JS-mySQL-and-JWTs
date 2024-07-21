
const db = require("../config/Database");

async function  queryProductsDetails() {
  app.get("/productsdetails", async (req, res) => {

    const productId = req.query.productId;

// if you want to test this through POSTMAN change "body" to body
     console.log(productId)
    const sql = "SELECT * FROM userDB.products WHERE id = ?";
    try {
      const [results] = await db.promise().query(sql, [productId]);
     res.json(results);
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });
}

module.exports = queryProductsDetails;