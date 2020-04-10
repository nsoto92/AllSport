import React from "react"
import { Link } from "react-router-dom"
import { useFeatPlayers } from "../hooks"
import "../styles/pros.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import "../styles/home.css"

export default (props) => {
  const { players } = useFeatPlayers()
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1>Trending Pros</h1>
        </div>
      </div>
      <div className="row  text-center px-md-4">
        <div className="row trendingPros text-center">
          {players.map((player) => (
            <div className="ih-item circle effect1">
              <a href="/players">
                <div className="spinner"></div>
                <div className="img">
                  <img src={player.img} alt="img" />
                </div>
                <div className="info">
                  <div class="info-back">
                    <h3>FAN FAVORITE</h3>
                    <p>ALL SPORTS</p>
                  </div>
                </div>
              </a>
              <div className="trending">
                <Link className="linkToShop" to="/players">
                  <button className="border site-btn btn-span ">
                    {player.firstname + " " + player.lastname}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
