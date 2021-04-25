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
        name: 'html-css.png'
    },
    {
        name: 'logo-javascript.svg'
    },
    {
        name: 'bootstrap-5.svg'
    },
    {
        name: 'nodejs-1-logo.png'
    },
    {
        name: 'heroku-logo.png'
    },
    {
        name: 'insomnia-icon.png'
    },
    {
        name: 'sequelize-logo.png'
    },
    {
        name: 'react.png'
    },
    {
        name: 'mong-db-logo.png'
    },
    {
        name: 'webpack.png'
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
                href="../../assets/resume/EstebanRomero-Resume-2021.pdf"
                download>
                    Download Resume
                </Button>     

        </Container>

           
        
        <Container>
        <Row className="justify-content-center">
         
      

            <Col className="my-3 text-center" xs={12} md={12} xl={12}>
            {iconsFrontEnd.map((image, i) => (
            <Image 
                className="mx-3 my-5"
                width={100}
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


    </>


    )
}

export default Resume;