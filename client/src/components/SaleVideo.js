import React from "react"
import ReactPlayer from "react-player"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default props => {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1>YOU CAN HAVE IT ALL</h1>
        </div>
      </div>

      <div className="player-wrapper">
        <ReactPlayer
          url="https://youtu.be/p3WFMrG91FcU"
          playing
          className="react-player"
          playing
          width="100%"
          height="100%"
        />
      </div>

      <br />

      <div className="container-fluid">
        <div className="saleButton text-center">
          <Link className="linkToShop" to="/products">
            <button className="sale-btn">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
