// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)
import React from "react"
import { usePlayers } from "../hooks"

import styles from "../styles/findPros.css"

export default (props) => {
  const { players } = usePlayers()

  return (
    <div className="playerBox">
      {players.map((player) => (
        <div className="playerList">
          <div className="playerSport">
            <p>{" Sport: " + player.sport}</p>
          </div>
          <div className="playerSport">
            <p>{" Team: " + player.team}</p>
          </div>

          <div className="playerDescriptionContainer">
            <p className="playerDescription">{player.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
