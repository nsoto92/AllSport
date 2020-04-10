import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default (props) => {
  return (
    <div class="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1>Latest and Greatest</h1>
        </div>
      </div>
      <div>
        <Link to="/products">
          <img
            src="./assets/nike.png"
            className="img-fluid nikeZoom"
            alt="Banner 1"
          />
        </Link>
      </div>
    </div>
  )
}
