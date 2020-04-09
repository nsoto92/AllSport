const router = require("express").Router()

router.get("/hello", (req, res, next) => {
  res.json({
    message: "Wepa",
  })
})

module.exports = router
