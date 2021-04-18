import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import { render } from '@testing-library/react'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'

describe("Buttons", () => {

    test("Buttons Render Without Crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Button></Button>, div);
    })
    
    test("Renders Play Button Correctly", () => {
        const button = create(<Button>Play</Button>);
        expect(button.toJSON()).toMatchSnapshot();
    })

})

