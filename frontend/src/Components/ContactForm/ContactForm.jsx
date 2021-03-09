import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

import emailjs from 'emailjs-com';

const ContactForm = () => {

    const [ status, setStatus ] = useState(null);
    const [ response, setResponse ] = useState(null);

    const sendEmail = (e) => {
        
        e.preventDefault();

        emailjs.sendForm('service_r9s0kji', 'template_v7c0h8j', e.target, 'user_URr9hAdzBvAn0dPzQZyux')
        .then((result) => {
            console.log(result.text);
            setStatus('success')
            setResponse(result.text);
        }, (error) => {
            console.log(error.text);
            setStatus('failure')
            setResponse(error.text);
        });
        e.target.reset();
    }


    const result = () => {
        if (status === 'success') {
            return(
                <h1>SUCCESS! {response} </h1>
            )
        } else if (status === 'failure') {
            return(
                <h1>Failure! {response} </h1>
            )
        }
    }




    return (
        
        <Container >
            <Row>
                <Col xs={2} />
                <Col >
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}  />
                    <Col xs={12} >
                        Contact Me:
                    </Col>
                
                    
                </Col>
                <Col>
                    <Form onSubmit={sendEmail}>
                        <Form.Group>
                            <Form.Label>Name: </Form.Label>
                            
                            <Form.Control type="text" placeholder="Enter Full Name" name="name" required={true} />
                        </Form.Group>

                        <Form.Group>   
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name="email" required={true} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Message: </Form.Label>
                            <br/>
                            <Form.Control type="text" as="textarea" rows = {4} name="message" required={true} />
                        </Form.Group>
                        <Button type="submit">Submit Message</Button>
                    </Form>

                    <div>
                        {(status === 'success')  ? result() : null }
                    </div>
                </Col>
            </Row>
            <Col xs={2} />
        </Container>

    )
}

export default ContactForm;
