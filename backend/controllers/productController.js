const db = require("../db");

// Get all products
const getProducts = (req, res) => {
    const sql = "SELECT * FROM products";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.status(200).json({
            success: true,
            products: results
        });
    });
};

module.exports = {
    getProducts
};