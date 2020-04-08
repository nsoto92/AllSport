// Coded by Justin Burrows (https://github.com/JustinBurrowsDev)
import React, { useState } from "react"
import ReactDOM from "react-dom"
import ReactCardFlip from "react-card-flip"
import { Link } from "react-router-dom"
import { usePlayers } from "../hooks"
import styles from "../styles/findPros.css"

export default (props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  function handleClick() {
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="playerList">
        <div>
          <img className="findPros" src={props.player.img} alt="playercard" />
        </div>
        <div className="playerName">
          <Link to={"/playerprofiles"}>
            <p>{props.player.firstname + " " + props.player.lastname}</p>
          </Link>
        </div>
        <button className="flipbutton" onClick={handleClick}>
          FLIP ME
        </button>
      </div>

      <div className="playerList">
        <div className="playerSport">
          <p>{" Sport: " + props.player.sport}</p>
        </div>
        <div className="playerSport">
          <p>{" Team: " + props.player.team}</p>
        </div>

        <div className="playerDescriptionContainer">
          <p className="playerDescription">{props.player.description}</p>
        </div>
        <button className="flipbutton" onClick={handleClick}>
          FLIP ME
        </button>
      </div>
    </ReactCardFlip>
  )
}
