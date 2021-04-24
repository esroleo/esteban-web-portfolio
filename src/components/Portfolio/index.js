import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
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
            description: `Group project 1 using external api's with fetch to support COVID patients`,
            link: "https://uot-project1-group07.github.io/project1-group07/"
        }
      ];


    // useState hook for Photolist to manage current photo
    // and make this data accessible to the Modal
    const [currentPhoto, setCurrentPhoto] = useState();

    // modal to conditinoally render the modal based on whether
    // an image has been clicked.
    const [isModalOpen, setIsModalOpen] = useState(false);

   // toggle Modal code from the return function
    const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({...image, index: i});
    //setIsModalOpen(true);
    setIsModalOpen(!isModalOpen);


    
  }
    return (

        <div className="flex-row">


            <Container>
                <Row className="justify-content-md-center">
                 {images.map((image, i) => (
                    <Col onClick={() => console.log("test")} className="my-3" xs={12} md={6} xl={4}>
                    <Card 
                    text="dark" 
                    className="mb-2" 
                    style={{ width: '18rem' }}>
                    <Card.Img variant="top" 
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

      </div>

    )
}

export default Portfolio;
