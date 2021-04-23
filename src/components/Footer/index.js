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

//<Nav className="justify-content-end" style={{ width: "100%" }}>
//<Nav className="ml-auto"></Nav>
function Footer() {


    return (
        <Navbar fixed="bottom" collapseOnSelect bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Connect with me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>

            <Nav.Link href="#GitHub" >GitHub</Nav.Link>
            <Nav.Link href="#Portfolio" >LinkeIn</Nav.Link>

        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer;