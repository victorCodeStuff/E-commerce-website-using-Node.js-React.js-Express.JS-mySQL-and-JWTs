const db = require("../config/Database");

async function queryProducts() {
  app.get("/products", async (req, res) => {
    const categoriesApplied = req.query.filteringSystem;
    const placeholders = Array(categoriesApplied.length).fill('?').join(', ');
    const sql = `SELECT * FROM userDB.products WHERE category IN (${placeholders})`;
    console.log(placeholders)

    try {
      const [results] = await db.promise().query(sql, categoriesApplied);
      res.json(results);
      console.log(categoriesApplied);
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });
}

module.exports = queryProducts;
