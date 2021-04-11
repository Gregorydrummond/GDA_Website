import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Upload = () => {
    //File State
    var selectedFile;

    // On file select (from the pop up)
    function onFileChange(event) {
        //Update the state
        //console.log(event.target.files[0]);
        selectedFile = event.target.files[0];
        //console.log(selectedFile);
    };

    //Input State
    const [input, setInput] = useState({
        gameName: "",
        //selectedFile: File
    })

    //User inputs information
    function handleChange(event) {
        const {name, value} = event.target;
        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    //Press submit button
    function handleClick(event) {
        event.preventDefault();
        
        console.log(input);
        // Details of the uploaded file
        console.log(selectedFile)

        const newGame = {
            title: input.gameName,
            file: selectedFile
        }

        axios.post('http://localhost:5000/info', newGame);
    }

    return (
        <div>
            <h2>Upload Games!</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Game Name</Form.Label>
                    <Form.Control type="text" name="gameName" value={input.gameName} onChange={handleChange} placeholder="Enter game name"/>
                </Form.Group>

                <div className="mb-3">
                    <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Upload Game Here</Form.File.Label>
                    <Form.File.Input type="file" name="selectedFile" value={input.selectedFile} onChange={onFileChange}/>
                    </Form.File>
                </div>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Upload
                </Button>
            </Form>
        </div>
    )
}

export default Upload
