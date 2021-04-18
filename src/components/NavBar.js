import { Nav, Navbar} from 'react-bootstrap'
import { BsPeopleCircle } from 'react-icons/bs'
import "../css/NavBar.css"
var logo = require('../images/GDA_Logo_Transparent.png')

const NavBar = () => {
    console.log(logo)
    return (
        <div>
            <Navbar bg="light" expand  className="navbar">
                <Navbar.Brand href="/">
                    <img 
                        src={logo.default}
                        alt="Logo"
                        width="60"
                        height="50"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link href="/"><h3>Game Developers Association</h3></Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className="navbar-nav ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/games">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/events">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/upload">Upload</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/login">
                            <BsPeopleCircle />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar

