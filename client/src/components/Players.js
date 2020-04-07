// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)
import React, { useState } from "react"
import ReactDOM from "react-dom"
import ReactCardFlip from "react-card-flip"
import { Link } from "react-router-dom"
import { usePlayers } from "../hooks"
import styles from "../styles/findPros.css"

export default (props) => {
  const { players } = usePlayers()

  const [isFlipped, setIsFlipped] = useState(false)

  function handleClick() {
    setIsFlipped(!isFlipped)
  }
  return (
    <div className="cards">
      {players.map((player) => (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="playerList">
            <div>
              <img className="findPros" src={player.img} alt="Product 1" />
            </div>
            <div className="playerName">
              <Link to={"/playerprofiles"}>
                <p>{player.firstname + " " + player.lastname}</p>
              </Link>
            </div>
            <button className="flipbutton" onClick={handleClick}>
              Click to flip
            </button>
          </div>

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
            <button className="flipbutton" onClick={handleClick}>
              Click to flip
            </button>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  )
}
