import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar'
import HomePage from "./components/Pages/HomePage"
import ContactPage from "./components/Pages/ContactPage"
import EventPage from "./components/Pages/EventPage"
import GamePage from "./components/Pages/GamePage"



function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/events' component={EventPage} />
            <Route path='/games' component={GamePage} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
