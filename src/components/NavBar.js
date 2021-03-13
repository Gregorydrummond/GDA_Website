import { Nav, Navbar} from 'react-bootstrap'
import { BsPeopleCircle } from 'react-icons/bs'
var logo = require('../images/gameController.png')

const NavBar = () => {
    console.log(logo)
    return (
        <div>
            <Navbar bg="light" expand>
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
                        <Nav.Link href="/">GDA</Nav.Link>
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

