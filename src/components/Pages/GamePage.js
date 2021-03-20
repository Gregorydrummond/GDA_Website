import "../../css/GamePage.css"
import Button from 'react-bootstrap/Button'
var gameCardImageEx1 = require('../../images/gameCardImageEx1.jpeg')
var placeholder = require('../../images/placeholder.png')

const GamePage = () => {
    return (
        <div>
            <h1 className="title">Games</h1>
            <div className="">
                <form>
                <label for="gsearch">Search Games:</label>
                <input className="search"/>
                </form>
            </div>
            <div className="gameCardContainer">
                <div className="gameCard">
                    <div className="gameTitle">
                        Game Title
                    </div>
                    <p className="gameDescription">
                        <img className="gameImage" src={gameCardImageEx1.default} alt="Game"/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique posuere odio ut iaculis. Vestibulum blandit ante a lacus vulputate, non efficitur nisi viverra.
                        <Button variant="primary">Play</Button>
                    </p>
                </div>
                <div className="gameCard">
                    <div className="gameTitle">
                        Game Title
                    </div>
                    <p className="gameDescription">
                        <img className="gameImage" src={gameCardImageEx1.default} alt="Game"/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique posuere odio ut iaculis. Vestibulum blandit ante a lacus vulputate, non efficitur nisi viverra.
                        <Button variant="primary">Play</Button>
                    </p>
                </div>
                <div className="gameCard">
                    <div className="gameTitle">
                        Game Title
                    </div>
                    <p className="gameDescription">
                        <img className="gameImage" src={gameCardImageEx1.default} alt="Game"/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique posuere odio ut iaculis. Vestibulum blandit ante a lacus vulputate, non efficitur nisi viverra.
                        <Button variant="primary">Play</Button>
                    </p>
                </div>
                <div className="gameCard">
                    <div className="gameTitle">
                        Game Title
                    </div>
                    <p className="gameDescription">
                        <img className="gameImage" src={gameCardImageEx1.default} alt="Game"/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique posuere odio ut iaculis. Vestibulum blandit ante a lacus vulputate, non efficitur nisi viverra.
                        <Button variant="primary">Play</Button>
                    </p>
                </div>
                <div className="gameCard">
                    <div className="gameTitle">
                        Game Title
                    </div>
                    <p className="gameDescription">
                        <img className="gameImage" src={gameCardImageEx1.default} alt="Game"/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique posuere odio ut iaculis. Vestibulum blandit ante a lacus vulputate, non efficitur nisi viverra.
                        <Button variant="primary">Play</Button>
                    </p>
                </div>
                <div className="gameCard">
                    <div className="gameTitle">
                        Game Title
                    </div>
                    <p className="gameDescription">
                        <img className="gameImage" src={gameCardImageEx1.default} alt="Game"/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique posuere odio ut iaculis. Vestibulum blandit ante a lacus vulputate, non efficitur nisi viverra.
                        <Button variant="primary">Play</Button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GamePage
