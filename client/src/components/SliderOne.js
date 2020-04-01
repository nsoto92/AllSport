import React from "react"
import Carousel from "react-bootstrap/Carousel"

import "../styles/home.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default props => {
  return (
    <div className="container-fluid p-0">
      <div className="site-slider">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/item-1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/item-2.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/item-3.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
