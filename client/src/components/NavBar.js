import React from "react"
import { useItems } from "../hooks"
import { useProducts } from "../hooks"
import { Link } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti"
import { FaSearch } from "react-icons/fa"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"
import "../styles/products.css"

export default props => {
  const { products } = useProducts()
  const { toggle, status, cart } = useItems()
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                HOME <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                SHOP
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/players">
                FIND A PRO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        <nav className="navbar navbar-light">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </nav>
        <div className="navbar-nav">
          <li className="nav-item  rounded-circle mx-2 search-icon">
            <FaSearch />
          </li>
          <li className="nav-item  rounded-circle mx-2 basket-icon">
            <TiShoppingCart
              id='className={status ? "cartItems" : "cartItems closed"}'
              onClick={toggle}
              className={
                status
                  ? "nav-item  rounded-circle mx-2 basket-icon closed"
                  : "nav-item  rounded-circle mx-2 basket-icon"
              }
            />
          </li>
        </div>
      </nav>
    </div>
  )
}
