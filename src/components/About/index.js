import React from 'react';
import profileImage from "../../assets/profile/profile_picture.png";
import gitHubLogo from "../../assets/icons/GitHub-logo.png";
import linkedIn from "../../assets/icons/linkedIn-logo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function About() {
    //my-5 is spacing in react
  return (
    <section> 
    <Container >
      <Row>
        <Col className="text-center my-4">
          <h1 id="about">About Me?</h1>
        </Col>
      </Row>

      <Row>
        <Col className="text-center my-1">
          <Image src={profileImage} 
          className="my-2" 
          style={{ width: "25%" }} 
          alt="cover" 
          roundedCircle />
        </Col>
      </Row>
   
      <Row>
        <Col className="text-center my-5">
          <p>
          Full stack web developer with extensive application support experience in the Capital Markets industry. Recently completed a certificate in full stack development form the University of Toronto, with newly developed skills in the MERN which includes but not limited to JavaScript, CSS, mongoDB, express..js, React.js, Node.js, PWA and SPA applications. Working on major banks in Toronto in the Capital Markets has provided me with extensive knowledge on incident, problem and change management which are key to maintaining productivity and productivity. We have worked on three teams to create meaningful web applications to help and serve the needs of clients  and expand our knowledge to keep moving forward. I’m excited to share my technical skills and grow the knowledge gathered with a company that is passionate about creativity and delivering amazing products that will fuel success.
          </p>
          <p>
          Achieving goals together means spending time doing what we love with people we care about. My goal is to do what I love with professionalism that will benefit us both in any future endeavors we work on.
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="text-center my-5">
          <a href="https://github.com/esroleo" target="_blank">
          <Image src={gitHubLogo} 
          className="my-2r" 
          style={{ width: "25%" }} 
          alt="cover" 
          rounded />
          </a>

          <a href="https://www.linkedin.com/mwlite/in/esroleo" target="_blank">
          <Image src={linkedIn} 
          className="my-2r" 
          style={{ width: "25%" }} 
          alt="github repo" 
          href="https://www.linkedin.com/in/esroleo/"
          target="_blank"
          rounded />
          </a>
          
        </Col>
      </Row>


     
    
    </Container>

    </section>
  );
}

export default About;