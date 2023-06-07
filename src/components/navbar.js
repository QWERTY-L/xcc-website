import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { redirect } from 'react-router-dom';

import './navbar.css'

function MainMenu(props){
    
    return (
        <Navbar expand="lg" variant="dark" className="MainMenu">
            <Container>
                <Navbar.Brand href="/">{props.websiteName}</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MainMenu;