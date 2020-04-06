import React from "react"
import { Link } from "react-router-dom"
import { usePlayers } from "../hooks"
import styles from "../styles/findPros.css"

export default props => {
  const { players } = usePlayers()
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1>Find A Pro</h1>
        </div>
      </div>

      {players.map(player => (
        <div>
          <ul className="list">
            <li className="listItem">
              <div>
                <img className="findPros" src={player.img} alt="Product 1" />
              </div>
              <Link className="linkToShop" to="/players">
                <div>
                  <span className="playerNames">
                    {player.firstname + " " + player.lastname + " | "}
                  </span>
                </div>
              </Link>
              <div className="playerDescriptionContainer">
                <p className="playerDescription">{player.description}</p>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}
