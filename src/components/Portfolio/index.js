import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Portfolio() {

    // const photosArray = [
    //     [ 
    //     'challeng-1-refactor-code-smaller',
    //     'run-buddy-project',
    //     'password-generator',
    //     'web-api-code-quiz',
    //     'work-day-scheduler',
    //     'project1-group07'
    //     ]
    // ]

    const images =[
        {
            title: 'Refactor Code',
            name: 'challeng-1-refactor-code-smaller',
            technology: 'HTML/CSS',
            description: 'Challenge to refactor code with best practices',
            link: "https://esroleo.github.io/html-css-git-challenge1-code-refactor/"
        },
        {
            title: 'Responsive Application',
            name: 'run-buddy-project',
            technology: 'HTML/CSS',
            description: 'Turn page into a responsive design with cool features',
            link: "https://esroleo.github.io/run-buddy/"
        },
        {
            title: 'Password Generator',
            name: 'password-generator',
            technology: 'CSS/Javascript',
            description: 'Dynamic javascript project to render page as SPA',
            link: "https://esroleo.github.io/javascript-challenge-password-generator/"
        },
        {
            title: 'Web API Code Quiz',
            name: 'web-api-code-quiz',
            technology: 'Javascript/CSS/LocalStorage',
            description: 'Local storage used to store objects using json',
            link: "https://esroleo.github.io/web-api-challenge-code-quiz/"
        },
        {
            title: 'Work Day Scheduler',
            name: 'work-day-scheduler',
            technology: 'Javascript/Bootstrap',
            description: 'Dynamic application using jquery',
            link: "https://esroleo.github.io/work-day-scheduler/"
        },
        {
            title: 'Project01 Grouo07',
            name: 'project1-group07',
            technology: 'HTML/CSS/Javascript',
            description: `Group project 1 uses external api's with fetch to support COVID patients`,
            link: "https://uot-project1-group07.github.io/project1-group07/"
        },
        {
            title: 'Project02 Group05',
            name: 'project2-group05',
            technology: 'HTML/CSS/Javascript/Sequelize/API',
            description: `Group project 2 ueses internal api's routes to talk to sequelize to fetch our data for our inventory application`,
            link: "https://github.com/Bootcamp-Group5"
        }
      ];



    return (

        


            <Container>
                <Row className="justify-content-md-center">
                 {images.map((image, i) => (
                    <Col onClick={() => console.log("test")} 
                     xs={12} md={6} xl={4}>
                    <Card 
                    text="dark" 
                    className="mb-2 my-2 " 
                    >
                    <Card.Img 
                    variant="top" 
                    
                    height={300}
                    src={require(`../../assets/projects/${image.name}.JPG`).default}

                    />
                    <Card.Body>
                        <Card.Title >{image.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{image.technology}</Card.Subtitle>
                        <Card.Text>
                        {image.description}
                        </Card.Text>
                        
                        <Button 
                        className="mb-2 text-center" 
                        text="light" 
                        bg="primary" 
                        variant="primary"
                        href={image.link}
                        target="_blank">
                            Go to Project
                            </Button>
                    </Card.Body>
                    </Card>


                    </Col>
                 
                 ))}

                </Row>
            </Container>

     

    )
}

export default Portfolio;
