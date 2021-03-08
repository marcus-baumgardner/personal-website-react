import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {

    const [ values, setValues ] = useState({});

    const sendEmail = () => {
        
        const url = "http://localhost:5000/api/send"

        const email = {
            name: values.name,
            email: values.email,
            message: values.message
        }

        console.log("email: ", email);

        axios.post(url, email)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));

    }

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}))
        console.log(values);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        sendEmail();
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name: </Form.Label>
                
                <Form.Control type="text" placeholder="Enter Full Name" name="name" value={values.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group>   
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" value={values.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Message: </Form.Label>
                <br/>
                <Form.Control type="text" as="textarea" rows = {4} name="message" value={values.message} onChange={handleChange} />
            </Form.Group>
            <Button type="submit">Submit Message</Button>
        </Form>
    )
}

export default ContactForm;
