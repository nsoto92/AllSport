// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)

import React from "react"
import { Link } from "react-router-dom"
import { usePlayers } from "../hooks"
import styles from "../styles/findPros.css"

export default (props) => {
  const { players } = usePlayers()
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1>Find A Pro</h1>
        </div>
      </div>
      <div className="playerBox">
        {players.map((player) => (
          <div className="playerList">
            <div>
              <img className="findPros" src={player.img} alt="Product 1" />
            </div>

            <div className="playerName">
              <Link to={"/playerprofiles"}>
                <p>{player.firstname + " " + player.lastname}</p>
              </Link>
            </div>
            <div className="playerSport">
              <p>{" Sport: " + player.sport + " " + " Team: " + player.team}</p>
            </div>

            <div className="playerDescriptionContainer">
              <p className="playerDescription">{player.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
