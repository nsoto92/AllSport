import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"

import "bootstrap/dist/css/bootstrap.min.css"

export default props => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
    </Router>
  )
}
