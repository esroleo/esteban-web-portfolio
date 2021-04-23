//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavPage from './components/NavPage';
import About from './components/About';


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
  
  //const [show, toggleShow] = useState(true);

  //const [navItemSelected, setNavItemSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);

  return (

    <div>

    <NavPage>
    contactSelected={setContactSelected}
    setContactSelected={setContactSelected}
    </NavPage>

    
       
    <main>
            <About></About>
     
    </main>


    </div>
      


);
}

export default App;
