import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import profileImage from "../../assets/profile/profile_picture.png";

const iconsFrontEnd =[
    {
        name: 'html-css.png',
    },
    {
        name: 'logo-javascript.svg'
    },
    {
        name: 'bootstrap-5.svg'
    },
    {
        name: 'bootstrap-5.svg'
    },
    {
        name: 'bootstrap-5.svg'
    },
    {
        name: 'bootstrap-5.svg'
    },
    {
        name: 'bootstrap-5.svg'
    },
    {
        name: 'bootstrap-5.svg'
    },
    {
        name: 'bootstrap-5.svg'
    }


  ];


  
function Resume() {


    return (


        <> 

        <Container className="text-center">
                    <Button
    
                text="light" 
                bg="primary" 
                variant="primary"
                href="./assets/resume/EstebanRomero-Resume-2021.docx"
                download>
                    Download Resume
                </Button>     

        </Container>

        <Container className="text-left my-5">
              <h3>Front End</h3>

        </Container>

            
        
        <Container>
        <Row className="justify-content-center">
         
      

            <Col className="my-3 text-center" xs={12} md={12} xl={4}>
            {iconsFrontEnd.map((image, i) => (
            <Image 
                className="mx-3 my-3"
                width={250}
                height={20}
                fluid
                src={require(`../../assets/icons/${image.name}`).default}
                rounded
                alt={image.name} 
                key={image.name}
            />
             ))}
            </Col>
         
        

        </Row>
    </Container>

    <Container className="text-left my-5">
              <h3>Back End </h3>

        </Container>



    </>


    )
}

export default Resume;