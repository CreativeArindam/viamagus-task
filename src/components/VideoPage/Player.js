//imports
import React from 'react'
import ReactPlayer from 'react-player/youtube'

//assets
import './css/Player.css'

const Player = () => {
    return (
        <div className="video__page">
            <div className="player__container">
                <ReactPlayer className="video__player" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="100%" height='100%' />
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default Player
