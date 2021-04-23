//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavPage from './components/NavPage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


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
      case 'Portfolio':
         return <Portfolio />;
      case 'Contact':
         return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
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

    <Footer></Footer>


    </div>
      


);
}

export default App;
