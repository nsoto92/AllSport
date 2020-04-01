import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default props => {
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
              <a className="nav-link" href="#">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SHOP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PLACEHOLDER
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FIND A STORE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
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
            <i className="fas fa-search p-2"></i>
          </li>
          <li className="nav-item  rounded-circle mx-2 basket-icon">
            <i className="fas fa-shopping-basket p-2"></i>
          </li>
        </div>
      </nav>
    </div>
  )
}
