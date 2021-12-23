import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Header(props) {
    return(
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand><Link to="/">Kate Huang</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
                    <Nav.Link><Link to="/experience">Experience</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
