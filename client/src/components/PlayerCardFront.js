import React from "react"
import { Link } from "react-router-dom"
import { usePlayers } from "../hooks"
import styles from "../styles/findPros.css"

export default (props) => {
  const { players } = usePlayers()

  return (
    <div>
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
        </div>
      ))}
    </div>
  )
}
