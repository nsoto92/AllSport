const express = require("express")
const productRoutes = require("./routes/products")
const athleteRoutes = require("./routes/athletes")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", productRoutes)
app.use("/api", athleteRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
