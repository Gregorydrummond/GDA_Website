import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar'
import HomePage from "./components/Pages/HomePage"
import ContactPage from "./components/Pages/ContactPage"
import EventPage from "./components/Pages/EventPage"
import GamePage from "./components/Pages/GamePage"
import ProfilePage from "./components/Pages/ProfilePage"
import LoginPage from "./components/Pages/LoginPage"
import GameViewPage from "./components/Pages/GameViewPage"
import UploadPage from "./components/Pages/UploadPage"
import "./css/App.css"


function App() {
  return (
    <div>
      <NavBar/>
        <Router>
          <Switch>
          <Route exact path='/' component={HomePage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/gameViewPage' component={GameViewPage} />
            <Route path='/events' component={EventPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/games' component={GamePage} />
            <Route path='/upload' component={UploadPage} />
            {/*<Route path='/login' component={LoginPage} />*/}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
