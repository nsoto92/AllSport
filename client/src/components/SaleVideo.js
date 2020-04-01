import React from "react"
import ReactPlayer from "react-player"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default props => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url="https://youtu.be/p3WFMrG91FcU"
        playing
        className="react-player"
        playing
        width="95%"
        height="100%"
      />
    </div>
  )
}
