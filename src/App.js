//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Nav from './components/Nav';
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

/* <Container>
  <Row className="justify-content-md-between">
    <Col sm={8}>Esteban</Col>
    <Col sm={4}>
      <ul>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
    </Col>

  </Row>
// </Container> 
*/



function App() {
  
  const [show, toggleShow] = useState(true);

  return (

    
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Esteban Romero</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

          <Nav.Link href="#About Me">Home</Nav.Link>
          <Nav.Link href="#Portfolio">Portofilio</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
          <Nav.Link href="#Resume">Resume</Nav.Link>

        </Nav>
      </Navbar.Collapse>
</Navbar>

      


);
}

export default App;
