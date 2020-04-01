const express = require("express")
const router = express.Router()
const conn = require("../db")

// Gets all categories from MySQL:
router.get("/products", (req, res, next) => {
  const sql = `SELECT * FROM products`

  conn.query(sql, (err, results, fields) => {
    if (err) {
      console.log(err)
    }
    res.json(results)
  })
})

module.exports = router
