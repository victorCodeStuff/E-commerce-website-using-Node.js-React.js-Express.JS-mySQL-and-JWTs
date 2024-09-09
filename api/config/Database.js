const mysql = require("mysql2")

    // Load environment variables from the .env file
    require("dotenv").config()

    // Extract database connection details from environment variables
    const DB_HOST = process.env.DB_HOST;
    const DB_USER = process.env.DB_USER;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_DATABASE = process.env.DB_DATABASE; 
    const DB_PORT = process.env.DB_PORT;

    // Create a connection pool to manage multiple database connections efficiently
const db = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database:DB_DATABASE,
    port:DB_PORT
})

module.exports = db