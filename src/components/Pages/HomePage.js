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
    return (
        <div>
            <Container className="mt-5">
                <Carousel >
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
                <h2>Featured Games</h2>
                <CardDeck className="pt-3">
                    <Card border="dark" >
                        <Card.Img className="cardImage" varient="top" src={gameCardImageEx1.default} />
                        <Card.Body>
                            <Card.Title>Mario vs The World</Card.Title>
                            <Card.Text>
                                Mario literally goes against everyone else in the world.
                            </Card.Text>
                            <Button variant="outline-primary">Play</Button>
                        </Card.Body>
                    </Card>

                    <Card >
                        <Card.Img className="cardImage" varient="top" src={gameCardImageEx2.default} />
                        <Card.Body>
                            <Card.Title>Game 2</Card.Title>
                            <Card.Text>
                                Game Description
                            </Card.Text>
                            <Button variant="outline-primary">Play</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <div className="mt-5 title">
                <h2 className="mb-3 title">New Games</h2>
                <CardDeck>
                    <Card>
                        <Card.Img className="newGameCardImage" varient="top" src={placeholder.default} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor purus vel mollis porta. Suspendisse volutpat viverra consequat. Aenean sit amet ultricies lacus, sit amet finibus mi. Aenean mi ex.
                        </Card.Text>
                        <Button variant="outline-primary">Play</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img className="newGameCardImage" varient="top" src={placeholder.default} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor purus vel mollis porta. Suspendisse volutpat viverra consequat. Aenean sit amet ultricies lacus, sit amet finibus mi. Aenean mi ex.
                        </Card.Text>
                        <Button variant="outline-primary">Play</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img className="newGameCardImage" varient="top" src={placeholder.default} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor purus vel mollis porta. Suspendisse volutpat viverra consequat. Aenean sit amet ultricies lacus, sit amet finibus mi. Aenean mi ex.
                        </Card.Text>
                        <Button variant="outline-primary">Play</Button>
                        </Card.Body>
                    </Card>

                </CardDeck>
            </div>
            <div className="allGamesButtonDiv">
                <a href="/games">
                    <button type="button" className="allGamesButton">All Games</button>
                </a>
            </div>
        </div>
    )
}

export default HomePage
