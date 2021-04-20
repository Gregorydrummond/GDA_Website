import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup } from '@testing-library/react'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import { Navbar, Carousel, Container, Card, CardDeck } from 'react-bootstrap'

// This is a change

describe("Render Tests", () => {

    it("Renders Navbar Without Crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Navbar></Navbar>, div);  
    })

    it("Renders Carousel Without Crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Carousel></Carousel>, div);
    })

    it("Renders Containers Without Crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Container></Container>, div);
    })

    it("Renders Card Deck Without Crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <CardDeck>
                <Card></Card>
            </CardDeck>, 
            div
        );
    })

})