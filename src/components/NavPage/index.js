import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/NavDropdown';

//data-testid="about" href="#about" onClick={() => setContactSelected(false)}

function NavPage(props) {



    const {
        contactSelected,
        setContactSelected,
        navItemSelected,
        setNavItemSelected
       
    } = props;
    

    return (
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Esteban Romero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

            <Nav.Link href="#AboutMe" onClick={() => setContactSelected(false)}>About Me</Nav.Link>
            <Nav.Link href="#Portfolio" onClick={() => console.log("clicked")}>Portofilio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>

        </Nav>
        </Navbar.Collapse>
        </Navbar>

    
    )

}

export default NavPage;