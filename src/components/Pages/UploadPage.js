import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../../css/UploadPage.css"

const Upload = () => {
    //File State
    var selectedFile;

    //Input State
    const [input, setInput] = useState({
        gameName: "",
        gameDescription: "",
        file: "",
        semester: "",
        genre1: "",
        genre2: "",
        contributors: "",
        otherInfo: ""
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
            file: input.file,
            semester: input.semester,
            genre1: input.genre1,
            genre2: input.genre2,
            contributors: input.contributors,
            otherInfo: input.otherInfo
        }

        axios.post('http://localhost:5000/info', newGame);


        document.getElementById('gameName').value='';
        document.getElementById('gameDescription').value='';
        document.getElementById('file').value='';
        document.getElementById('semester').value='';
        document.getElementById('genre1').value='';
        document.getElementById('genre2').value='';
        document.getElementById('contributors').value='';
        document.getElementById('otherInfo').value='';
    }

    return (
        <div className="uploadPage">
            <style>{"body{background-color: gainsboro}"}</style>
            <Container>
              <h1 id = "title">Upload Games!</h1>
              <form onSubmit={handleClick}>
                  <br />
                  <div class="form-group">
                      <label for="gameName"><h5>Game Name</h5></label>
                      <input class="form-control" type="text" id="gameName" name="gameName" value={input.gameName} onChange={handleChange} placeholder="Enter game name" required/><br/>
                      <label for="gameDescription"><h5>Game Description</h5></label><br/>
                      <textarea class="form-control" type="text" id="gameDescription" name="gameDescription" value={input.gameDescription} onChange={handleChange} placeholder="Tell us about your game" required/><br/>
                      <label for="file"><h5>Link to Game</h5></label>
                      <input class="form-control" type="text" id="file" name="file" value={input.file} onChange={handleChange} placeholder="Enter link to your game" required/><br/>
                      <label for="genre1"><h5>Choose Semester</h5></label>
                      <select class="form-control" id="semester" name="semester" onChange={handleChange}>
                          <option value="Fall 2019">Fall 2019</option>
                          <option value="Spring 2020">Spring 2020</option>
                          <option value="Summer 2020">Summer 2020 </option>
                          <option value="Fall 2020">Fall 2020</option>
                          <option value="Spring 2021">Spring 2021</option>
                      </select><br/>
                      <label for="genre1"><h5>Choose 1st Genre</h5></label>
                      <select class="form-control" id="genre1" name="genre1" onChange={handleChange} required>
                          <option value="Action">Action</option>
                          <option value="Adventure">Adventure</option>
                          <option value="Battle Royale">Battle Royale</option>
                          <option value="Beat 'em">Beat 'em</option>
                          <option value="Casual">Casual</option>
                          <option value="Fighting">Fighting</option>
                          <option value="MMORPG">MMORPG</option>
                          <option value="Open World">Open World</option>
                          <option value="Platform">Platform</option>
                          <option value="Racing">Racing</option>
                          <option value="Role-Playing">Role-Playing</option>
                          <option value="Sandbox">Sandbox</option>
                          <option value="Shooter">Shooter</option>
                          <option value="Simulation">Simulation</option>
                          <option value="Sports">Sports</option>
                          <option value="Strategy">Strategy</option>
                          <option value="Survival">Survival</option>
                          <option value="Trivia">Trivia</option>
                      </select><br/>
                      <label for="genre2"><h5>Choose 2nd Genre</h5></label>
                      <select class="form-control" id="genre2" name="genre2" onChange={handleChange}>
                          <option value="Action">Action</option>
                          <option value="Adventure">Adventure</option>
                          <option value="Battle Royale">Battle Royale</option>
                          <option value="Beat 'em">Beat 'em</option>
                          <option value="Casual">Casual</option>
                          <option value="Fighting">Fighting</option>
                          <option value="MMORPG">MMORPG</option>
                          <option value="Open World">Open World</option>
                          <option value="Platform">Platform</option>
                          <option value="Racing">Racing</option>
                          <option value="Role-Playing">Role-Playing</option>
                          <option value="Sandbox">Sandbox</option>
                          <option value="Shooter">Shooter</option>
                          <option value="Simulation">Simulation</option>
                          <option value="Sports">Sports</option>
                          <option value="Strategy">Strategy</option>
                          <option value="Survival">Survival</option>
                          <option value="Trivia">Trivia</option>
                      </select><br/>

                      <label for="contributors"><h5>Contributors</h5></label><br/>
                      <textarea class="form-control" type="text" id="contributors" name="contributors" value={input.contributors} onChange={handleChange} placeholder="Who was invovled!" required/><br/>
                      <label for="otherInfo"><h5>Other Information</h5></label><br/>
                      <textarea class="form-control" type="text" id="otherInfo" name="otherInfo" value={input.otherInfo} onChange={handleChange} placeholder="Anything else we need to know?" required/><br/>
                      <input type='submit' value='Upload'></input>
                  </div>
              </form>
          </Container>
        </div>
    )
}

export default Upload
