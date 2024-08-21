const db = require("../config/Database");

async function querySearches() {
  app.get("/search", async (req, res) => {
    const currentSearch = req.query.search;
    console.log(currentSearch)
   const query = "SELECT * FROM userDB.products where productsName like (?)";
    try {
      const [results] = await db.promise().query(query, currentSearch);
      res.json(results);
     console.log(results)
    } catch (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });
}

module.exports = querySearches;