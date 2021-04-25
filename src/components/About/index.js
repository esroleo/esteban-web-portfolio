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
          Achieving goals together means spending time doing what we love with people we care about. My goal is to do what I love with professionalism that will benefit us both in any future endeavors we work on.
          </p>
          <p>
          I am currently working as an application support analyst at BMO Capital markets. My job entails making sure that our production environment runs smoothly.
          </p>
          <p>
            I am hoping to become a full Stack Web Developer as part of my BootCamp completion!
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

          <a href="https://github.com/esroleo" target="_blank">
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