// Coded by Norbert M. Soto (https://github.com/nsoto92)
// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)

const express = require("express")
const productRoutes = require("./routes/products")
const athleteRoutes = require("./routes/athletes")
const trendingAthRoutes = require("./routes/trendingAth")
const trendingProdRoutes = require("./routes/trendingProd")
const userRoutes = require("./routes/user")
const protectedRoutes = require("./routes/protected")
const expressjwt = require("express-jwt")
const config = require("config")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", productRoutes)
app.use("/api", athleteRoutes)
app.use("/api", trendingAthRoutes)
app.use("/api", trendingProdRoutes)
app.use("/api", userRoutes)
app.use("/api", expressjwt({ secret: config.get("secret") }), protectedRoutes)

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render error page
  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err,
  })
})

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
