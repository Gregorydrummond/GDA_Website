import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Upload = () => {
    //File State
    var selectedFile;

    //Input State
    const [input, setInput] = useState({
        gameName: "",
        gameDescription: "",
        file: "",
        //selectedFile: null
    })
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');

    // On file select (from the pop up)
    const onFileChange = event => {
        //Update the state
        //console.log(event.target.files[0]);
        // selectedFile = event.target.files[0];
        setFile(event.target.files[0]);
        //setFileName(event.target.files[0].name);
    };

    //User inputs information
    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    //Press submit button
    function handleClick(event) {
        event.preventDefault();

        //console.log(input);
        // Details of the uploaded file
        //console.log(file)

        const newGame = {
            title: input.gameName,
            gameDescription: input.gameDescription,
            file: input.file
        }

        axios.post('http://localhost:5000/info', newGame);

        document.getElementById('gameName').value='';
        document.getElementById('gameDescription').value='';
        document.getElementById('file').value='';

        console.log(input.file);
    }

    return (
        <div>
            <h2>Upload Games!</h2>
            <form onSubmit={handleClick}>
                <br/>
                <div class="form-group">
                    <label for="gameName"><h5>Game Name</h5></label>
                    <input class="form-control" type="text" id="gameName" name="gameName" value={input.gameName} onChange={handleChange} placeholder="Enter game name" required/><br/>
                    <label for="lname"><h5>Game Description</h5></label><br/>
                    <textarea class="form-control" type="text" id="gameDescription" name="gameDescription" value={input.gameDescription} onChange={handleChange} placeholder="Tell us about your game" required/><br/>
                    {/* <input type="submit" value="Upload" onClick={handleClick} /> */}
                    <label for="file"><h5>Link to Game</h5></label>
                    <input class="form-control" type="text" id="file" name="file" value={input.file} onChange={handleChange} placeholder="Enter link to your game" required/><br/><br/>
                    <input type='submit' value='Upload'></input>

                </div>
            </form>
            {/* <Form hasValidation>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Game Name</Form.Label>
                    <Form.Control type="text" name="gameName" value={input.gameName} onChange={handleChange} placeholder="Enter game name" required hasValidation/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Game Description</Form.Label>
                    <Form.Control as="textarea" name="gameDescription" value={input.gameDescription} onChange={handleChange} placeholder="Tell us about your game" />
                </Form.Group>

                <div className="mb-3">
                    <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Upload Game Here</Form.File.Label>
                    <Form.File.Input type="hidden" name="selectedFile" value={input.selectedFile} onChange={onFileChange}/>
                    </Form.File>
                </div>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Upload
                </Button>
            </Form> */}
        </div>
    )
}

export default Upload
