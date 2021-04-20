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
    // var idx = document.URL.indexOf('=');
    // var data;
    // var description;
    // const [gameInfo, setGameInfo] = useState({
    //     title: '',
    //     gameDescription: '',
    //     _id: '',
    //     file: null
    // });

    // useEffect(async () => {
    //     await axios
    //         .get("http://localhost:5000/info")
    //         .then(res => {
    //             data = res.data.filter(game => game._id == document.URL.slice(idx+1))
    //         })
    //         .catch(e => console.log(e))
    //         .then(setGameInfo(data))
    //         .catch(error => console.log(error));

        
    //     console.log(data[0]);
    // });

    // function handleClick() {
    //     console.log(gameInfo);
    // }

    

    return (
        <div className="gameViewPage">
            <div className="imageBannerContainer">
                <img src={gameBanner.default} alt="Game Banner" className="imageBanner"/>
                <div className="bannerGameTitle">
                    Game Title
                </div>
            </div>
            <div className="genreAndSemster">
                <div className="genre">
                    Genre 1
                </div>
                <div className="genre">
                    Genre 2
                </div>
                <div className="semester">
                    Spring 2020
                </div>
            </div>
            <div className="gameInfo">
                <div className="gameViewDescription">
                    <h4>Game Description</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu convallis ligula. Sed hendrerit, magna vel vulputate ullamcorper, nibh nulla varius orci, sit amet placerat diam lorem eget tellus. 
                        Fusce ullamcorper, sapien sed ultricies tristique, ipsum augue pellentesque purus, sit amet condimentum lacus magna a est. Phasellus ultricies risus metus, quis iaculis ex lobortis sit amet.
                    </p>
                </div>
                <div className="gameViewDescription">
                    <h5>Contributors</h5>
                    <ul className="names">
                        <li>Name 1: Team Lead, Gameplay Programming</li>
                        <li>Name 2: UI Design Programming</li>
                        <li>Name 3: Enemy Model, 2D Art</li>
                        <li>Name 4: Boss Character Model</li>
                        <li>Name 5: Main Character Model</li>
                        <li>Name 6: Level Designer</li>
                    </ul>
                </div>
                <div className="gameViewDescription otherInfo">
                    <h5>Other Info</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ante justo. Aliquam imperdiet non lacus rutrum eleifend. In pellentesque lacinia pellentesque. Duis auctor, sapien eget venenatis sodales, turpis diam placerat ipsum, a volutpat elit ante tristique arcu. Nam ultricies ipsum vitae risus luctus, eu faucibus felis ultrices. Donec eget.
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
                <Link to='../../images/marioHD.jpeg' target="_blank" download>
                    <button type="button" className="downloadButton" >Download</button>
                </Link>
            </Container>
        </div>
    )
}

export default GameView
