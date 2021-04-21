import React, { useState, useEffect } from 'react'
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import "../../css/HomePage.css"
var marioHD = require('../../images/marioHD.jpeg')
var gameDev = require('../../images/gameDev.png')
var gameDev2 = require('../../images/gameDev2.jpeg')
var gameCardImageEx1 = require('../../images/gameCardImageEx1.jpeg')
var gameCardImageEx2 = require('../../images/gameCardImageEx2.jpeg')
var placeholder = require('../../images/placeholder.png')

const HomePage = () => {
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
            .get("http://localhost:5000/info")
            .then(res => {
                setGameInfo(res.data)
            })
            .catch(error => console.log(error));

        //console.log(gameInfo);
    }, [gameInfo]);

    var feauturedGame1Title = gameInfo.length > 0 ? gameInfo[0].title : "Game 1 Title";
    var feauturedGame1Description = gameInfo.length > 0 ? gameInfo[0].gameDescription : "Game 1 Description";
    var feauturedGame1ID = gameInfo.length > 0 ? gameInfo[0]._id : "";

    var feauturedGame2Title = gameInfo.length > 1 ? gameInfo[1].title : "Game 2 Title";
    var feauturedGame2Description = gameInfo.length > 1 ? gameInfo[1].gameDescription : "Game 1 Description";
    var feauturedGame2ID = gameInfo.length > 1 ? gameInfo[1]._id : "";

    var newGame1Title = gameInfo.length > 0 ? gameInfo[gameInfo.length - 1].title : "New Game 1 Title";
    var newGame1Description = gameInfo.length > 0 ? gameInfo[gameInfo.length - 1].gameDescription : "New Game 1 Description";
    var newGame1ID = gameInfo.length > 0 ? gameInfo[gameInfo.length - 1]._id : "";

    var newGame2Title = gameInfo.length > 1 ? gameInfo[gameInfo.length - 2].title : "Game 2 Title";
    var newGame2Description = gameInfo.length > 1 ? gameInfo[gameInfo.length - 2].gameDescription : "Game 1 Description";
    var newGame2ID = gameInfo.length > 1 ? gameInfo[gameInfo.length - 2]._id : "";

    var newGame3Title = gameInfo.length > 2 ? gameInfo[gameInfo.length - 3].title : "Game 2 Title";
    var newGame3Description = gameInfo.length > 2 ? gameInfo[gameInfo.length - 3].gameDescription : "Game 1 Description";
    var newGame3ID = gameInfo.length > 2 ? gameInfo[gameInfo.length - 3]._id : "";

    return (
        <div className="homePage">
        <style>{"body{background-color: gainsboro}"}</style>
        <Container>
            <Container className="mt-5">
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block"
                            align
                            src={marioHD.default}
                            width="100%"
                            height="600"
                            alt="First Slide"
                        />
                        <Carousel.Caption className="bg-dark">
                            <h3>A Picture of Mario</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique posuere odio ut iaculis. Vestibulum blandit ante a lacus vulputate, non efficitur nisi viverra.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block"
                            align
                            src={gameDev.default}
                            width="100%"
                            height="600"
                            alt="First Slide"
                        />
                        <Carousel.Caption className="bg-dark">
                            <h3>A GDA Picture</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie   interdum sem pharetra tristique. Sed sagittis mattis risus. Nam dignissim tincidunt urna sed vulputate. Duis.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block"
                            align
                            src={gameDev2.default}
                            width="100%"
                            height="600"
                            alt="First Slide"
                        />
                        <Carousel.Caption className="bg-dark">
                            <h3>A Second GDA Picture</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie   interdum sem pharetra tristique.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container>
            <div className="mt-5 title">
                <h2 className="sectionTitle">Featured Games</h2>
                <CardDeck className="pt-3">
                    <Card className="featuredGameCard">
                        <Card.Img className="cardImage" varient="top" src={gameCardImageEx1.default} />
                        <Card.Body>
                            <Card.Title>{feauturedGame1Title}</Card.Title>
                            <Card.Text>
                                {feauturedGame1Description}
                            </Card.Text>
                            <div id="button" className="GameButton">
                                <Button className="playButton" href={`/gameViewPage?id=${feauturedGame1ID}`} variant="outline-primary">Play</Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="featuredGameCard">
                        <Card.Img className="cardImage" varient="top" src={gameCardImageEx2.default} />
                        <Card.Body>
                            <Card.Title>{feauturedGame2Title}</Card.Title>
                            <Card.Text>
                                {feauturedGame2Description}
                            </Card.Text>
                            <div data-testid="button" className="GameButton">
                                <Button className="playButton" href={`/gameViewPage?id=${feauturedGame2ID}`} variant="outline-primary">Play</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <div className="mt-5 title">
                <h2 className="mb-3 sectionTitle">New Games</h2>
                <CardDeck>
                    <Card className="newGameCard">
                        <Card.Img className="newGameCardImage" varient="top" src={placeholder.default} />
                        <Card.Body>
                            <Card.Title>{newGame3Title}</Card.Title>
                            <Card.Text>
                                {newGame3Description}
                            </Card.Text>
                            <div id="button" className="newGameButton">
                                <Button className="playButton" href={`/gameViewPage?id=${newGame3ID}`} variant="outline-primary">Play</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="newGameCard">
                        <Card.Img className="newGameCardImage" varient="top" src={placeholder.default} />
                        <Card.Body>
                            <Card.Title>{newGame2Title}</Card.Title>
                            <Card.Text>
                                {newGame2Description}
                            </Card.Text>
                            <div id="button" className="newGameButton">
                                <Button className="playButton" href={`/gameViewPage?id=${newGame2ID}`} variant="outline-primary">Play</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="newGameCard">
                        <Card.Img className="newGameCardImage" varient="top" src={placeholder.default} />
                        <Card.Body>
                            <Card.Title>{newGame1Title}</Card.Title>
                            <Card.Text>
                                {newGame1Description}
                            </Card.Text>
                            <div id="button" className="newGameButton">
                                <Button className="playButton" href={`/gameViewPage?id=${newGame1ID}`} variant="outline-primary">Play</Button>
                            </div>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>
            <div className="allGamesButtonDiv">
                <a href="/games">
                    <button type="button" className="allGamesButton">All Games</button>
                </a>
            </div>
        </Container>
        </div>
    )
}

export default HomePage
