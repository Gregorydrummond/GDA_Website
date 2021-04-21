import React, { useState, useEffect } from 'react'
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import "../../css/GameViewPage.css"
var gameBanner = require('../../images/gameBanner.jpeg')
var marioHD = require('../../images/marioHD.jpeg')
var gameCardImageEx1 = require('../../images/gameCardImageEx1.jpeg')
var gameCardImageEx2 = require('../../images/gameCardImageEx2.jpeg')
var placeholder = require('../../images/placeholder.png')


const GameView = ({id}) => {
    var idx = document.URL.indexOf('=');
    var data;
    var description;
    const [gameInfo, setGameInfo] = useState({
        _id: '',
        title: '',
        gameDescription: '',
        file: "",
        semester: "",
        genre1: "",
        genre2: "",
        contributors: "",
        otherInfo: ""
    });

    useEffect(async () => {
        await axios
            .get("https://gda-website.herokuapp.com/")
            .then(res => {
                data = res.data.filter(game => game._id == document.URL.slice(idx+1))
            })
            .catch(e => console.log(e))
            // .then(setGameInfo(data))
            .catch(error => console.log(error));

        setGameInfo(data[0])
        console.log(data[0]);
    }, [gameInfo]);

    function handleClick() {
        console.log(gameInfo);
    }

    return (
        <div className="gameViewPage">
            <div className="imageBannerContainer">
                <img src={gameBanner.default} alt="Game Banner" className="imageBanner"/>
                <div className="bannerGameTitle">
                    {gameInfo.title}
                </div>
            </div>
            <div className="genreAndSemster">
                <div className="genre">
                    {gameInfo.genre1}
                </div>
                <div className="genre">
                    {gameInfo.genre2}
                </div>
                <div className="semester">
                    {gameInfo.semester}
                </div>
            </div>
            <div className="gameInfo">
                <div className="gameViewDescription">
                    <h4>Game Description</h4>
                    <p>
                        {gameInfo.gameDescription}
                    </p>
                </div>
                <div className="gameViewDescription">
                    <h5>Contributors</h5>
                        <p>
                            {gameInfo.contributors}
                        </p>
                    {/* <ul className="names">
                        <li>Name 1: Team Lead, Gameplay Programming</li>
                        <li>Name 2: UI Design Programming</li>
                        <li>Name 3: Enemy Model, 2D Art</li>
                        <li>Name 4: Boss Character Model</li>
                        <li>Name 5: Main Character Model</li>
                        <li>Name 6: Level Designer</li>
                    </ul> */}
                </div>
                <div className="gameViewDescription otherInfo">
                    <h5>Other Info</h5>
                    <p>
                        {gameInfo.otherInfo}
                    </p>
                </div>    
            </div>
            <Container className="mb-5">
                <Carousel className="carousel" fade>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            align
                            src={gameCardImageEx1.default}
                            width="100%"
                            height="600"
                            alt="First Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            align
                            src={gameCardImageEx2.default}
                            width="100%"
                            height="600"
                            alt="First Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            align
                            src={gameBanner.default}
                            width="100%"
                            height="600"
                            alt="First Slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="downloadButtonDiv">
                <a href={gameInfo.file} target="_blank">
                    <button type="button" className="downloadButton">Download</button>
                </a>
            </Container>
        </div>
    )
}

export default GameView
