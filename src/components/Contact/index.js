import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';







function ContactForm() {

    // hook that will manage the form data as a controlled compoennt
    //const [formState, setFormState] = useState();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // hook to validate error message of the form
    const [errorMessage, setErrorMessage] = useState('');

    // Show Modal after submitting form
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // deconstruct formState
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
          handleShow ()
          
         } 
      };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
            setErrorMessage('Your email is invalid.');
            } else {
            setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
            } else {
            setErrorMessage('');
            }
        }
        //console.log('errorMessage', errorMessage); 
        // if form data has passed then assigned correct form state
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            }
    };

  
    return (

        <> 
        <Container>

        <Form id="contact-form" onSubmit={handleSubmit}>

            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" defaultValue={name} onBlur={handleChange} size="lg" type="name" placeholder="Enter name" />
                <Form.Text className="text-muted">
                We'll never share your name with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" defaultValue={email} onBlur={handleChange} size="lg" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control name="message" defaultValue={message} onBlur={handleChange} as="textarea" rows={3} />
            </Form.Group>

            {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
            )}

            <Button variant="primary" type="submit">
                Submit
            </Button>

            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Your message has been sent!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Esteban will get back to you as soon as possible! 
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
             </Modal>

        </Container>
        </>        
             
    )

}
    
export default ContactForm;