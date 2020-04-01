import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default props => {
  return (
    <div class="container my-5">
      <div className="container text-center">
        <div className="features">
          <h1>Latest and Greatest</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-12">
          <img src="./assets/cleats.png" class="img-fluid" alt="Banner 1" />
        </div>
        <div class="col-md-4 col-12">
          <img src="./assets/bball.jpeg" class="img-fluid" alt="Banner 2" />
        </div>
      </div>
      <div class="row my-md-3">
        <div class="col-md-4 col-12">
          <img src="./assets/tennis.jpeg" class="img-fluid" alt="Banner 3" />
        </div>
        <div class="col-md-8 col-12">
          <img src="./assets/adidas.jpeg" class="img-fluid" alt="Banner 4" />
        </div>
      </div>
    </div>
  )
}
