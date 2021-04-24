import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Portfolio() {


    return (

        <div>
            <h1> Test Portfolio </h1>

            <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image fluid src={require('../../assets/projects/challeng-1-refactor-code-smaller.JPG').default} rounded />
                </Col>
                <Col xs={6} md={4}>
                <Image fluid src={require('../../assets/projects/challeng-1-refactor-code-smaller.JPG').default} rounded />
                </Col>
                <Col xs={6} md={4}>
                <Image fluid src={require('../../assets/projects/challeng-1-refactor-code-smaller.JPG').default} rounded />
                </Col>
            </Row>
            </Container>
        </div>

    )
}

export default Portfolio;