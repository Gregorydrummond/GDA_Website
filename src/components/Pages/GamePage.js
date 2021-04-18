import "../../css/GamePage.css"
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import axios from "axios"
var gameCardImageEx1 = require('../../images/gameCardImageEx1.jpeg')
var placeholder = require('../../images/placeholder.png')

const GamePage = () => {
    const [gameInfo, setGameInfo] = useState([{
        title: '',
        gameDescription: '',
        _id: '',
        file: null
    }]);

    useEffect(() => {
        // fetch("/info").then(res => {
        //     if(res.ok) {
        //         return res.json();
        //     }
        // }).then(jsonRes => {
        //     console.log(jsonRes)
        //     setGameInfo(jsonRes)});
        axios
            .get("http://localhost:5000/info")
            .then(res => setGameInfo(res.data))
            .catch(error => console.log(error));
    });

    return (
        <div className="gamePageBody">
            <h1 className="title">Games</h1>
            <div className="">
                <form>
                <label for="gsearch">Search Games:</label>
                <input className="search"/>
                </form>
            </div>
            <div className="gameCardContainer">
                {gameInfo.map(info =>
                    <div className="gameCard">
                        <div className="gameTitle">
                            {info.title}
                        </div>
                        <img className="gameImage" src={gameCardImageEx1.default} alt="Game"/>
                        <p className="gameDescription">
                            
                            {info.gameDescription}
                            <div>
                                <Button className="playButton" href={`/gameViewPage?id=${info._id}`} variant="primary">Play</Button>
                            </div>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GamePage
