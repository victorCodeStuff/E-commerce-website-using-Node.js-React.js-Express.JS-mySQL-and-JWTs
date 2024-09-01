const db = require("../config/Database");

async function queryCustomProducts() {
  app.get("/homeProducts", async (req, res) => {
    const products = req.query.productsToBeShown ;
    const placeholders = Array(products.length).fill('?').join(',')
    const sql = `SELECT * FROM userDB.products WHERE id IN (${placeholders})`

    try {
      const [results] = await db.promise().query(sql, products);
      res.json(results);
      
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
}

module.exports = queryCustomProducts;
