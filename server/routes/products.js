// Coded by Norbert M. Soto (https://github.com/nsoto92)

const express = require("express")
const router = express.Router()
const conn = require("../db")

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
