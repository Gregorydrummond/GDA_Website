import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button'
import { cleanup } from '@testing-library/react'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'

describe("Buttons", () => {

    afterEach(cleanup);

    it("Buttons Render Without Crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Button></Button>, div);
    })
    
    it("Renders Play Buttons Correctly", () => {
        const button = create(<Button>Play</Button>)
        expect(button.toJSON()).toMatchSnapshot();
    })

    it("Renders All Games Button Correctly", () => {
        const button = create(<Button>All Games</Button>);
        expect(button.toJSON()).toMatchSnapshot();
    })

    it("Renders Upload Button Correctly", () => {
        const button = create(<Button>Upload</Button>);
        expect(button.toJSON()).toMatchSnapshot();
    })

})

