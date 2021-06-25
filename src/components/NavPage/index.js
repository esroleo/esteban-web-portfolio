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


//data-testid="about" href="#about" onClick={() => setContactSelected(false)}

function NavPage(props) {


    const {
        navLinkSelected,
        setNavLinkSelected
       
    } = props;
    

    return (
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Esteban Romero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

            <Nav.Link href="#AboutMe" onClick={() => setNavLinkSelected('About')}>About Me</Nav.Link>
            <Nav.Link href="#Portfolio" onClick={() => setNavLinkSelected('Portfolio')}>Portofilio</Nav.Link>
            <Nav.Link href="#Resume" onClick={() => setNavLinkSelected('Resume')}>Resume</Nav.Link>
            <Nav.Link href="#Contact" onClick={() => setNavLinkSelected('Contact')}>Contact</Nav.Link>

        </Nav>
        </Navbar.Collapse>
        </Navbar>

    
    )

}

export default NavPage;