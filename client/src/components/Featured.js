import React from "react"
import { useProducts } from "../hooks"
import { useItems } from "../hooks"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default props => {
  const { products } = useProducts()
  const { add } = useItems()
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1>Featured</h1>
        </div>
      </div>

      <div className="site-slider-three px-md-4">
        <div className="slider-three row text-center px-4">
          {products.map(product => (
            <div className="col-md-2 product pt-md-5">
              <img src={product.image} className="img-fluid" alt="Image 1" />
              <div className="cart-details">
                <h6 className="pro-title p-0">{product.title}</h6>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="pro-price py-2">
                  <h5>
                    <small>
                      <s className="text-secondary">{product.price}</s>
                    </small>
                  </h5>
                </div>
                <div className="cart mt-4">
                  <button className="border site-btn btn-span">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-btn">
          <span className="prev position-top">
            <i className="fas fa-chevron-left fa-2x text-secondary"></i>
          </span>
          <span className="next position-top right-0">
            <i className="fas fa-chevron-right fa-2x text-secondary"></i>
          </span>
        </div>
      </div>
    </div>
  )
}
