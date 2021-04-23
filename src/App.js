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
  const [navLinkSelected, setNavLinkSelected] = useState('Caca');

  const renderPage = () => {
    switch (navLinkSelected) {
      case 'About':
        return <About />;
      // case 'Blog':
      //   return <Blog />;
      // case 'Contact':
      //   return <Contact />;
      default:
        return console.log("nothing to see here");
    }
  };

  return (

    <div>

    <NavPage navLinkSelected={navLinkSelected} setNavLinkSelected={setNavLinkSelected}>

    </NavPage>

          
    <main>
            <h1>{navLinkSelected}</h1>
            {/* Call the renderPage function passing in the currentPage */}
            <div>{renderPage(navLinkSelected)}</div>

     
    </main>


    </div>
      


);
}

export default App;
