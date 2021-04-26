import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//<Nav className="justify-content-end" style={{ width: "100%" }}>
//<Nav className="ml-auto"></Nav>
function Footer() {


    return (
        <Navbar fixed="bottom" collapseOnSelect bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Connect with me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>

            <Nav.Link 
            href="https://github.com/esroleo"
            target="_blank"
            >GitHub
            </Nav.Link>
            <Nav.Link 
            href="https://www.linkedin.com/in/esroleo/"
            target="_blank"
            >Linkedin
            </Nav.Link>

        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer;