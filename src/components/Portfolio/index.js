import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


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
          name: 'challeng-1-refactor-code-smaller',
          category: 'refactor',
          description: 'Challenge to refactor code with best practices',
        },
        {
          name: 'run-buddy-project',
          category: 'javascript',
          description: 'Turn page into a responsive design with cool features',
        },
        {
          name: 'password-generator',
          category: 'dynamic js',
          description: 'Dynamic javascript project to render page as SPA',
        },
        {
          name: 'web-api-code-quiz',
          category: 'api',
          description: 'User local storage to store objects using json',
        },
        {
          name: 'work-day-scheduler',
          category: 'jquery',
          description: 'Dynamic application using jquery',
        },
        {
          name: 'project1-group07',
          category: 'group-project',
          description: `Group project 1 using external api's with fetch`,
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
                    <Col onClick={() => console.log("test")} className="my-3" xs={6} md={6}>
                    <span class="span-background"> 
                        <h3>Horiseon Services</h3>
                        <span class="lower-text">HTML/CSS</span>
                    </span>
                
                    <Image 
                        fluid 
                        variant="danger"
                        className="border border-primary"
                        src={require(`../../assets/projects/${image.name}.JPG`).default}
                        rounded
                        alt={image.name} 
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />


                    </Col>
                 
                 ))}

                </Row>
            </Container>

      </div>

    )
}

export default Portfolio;