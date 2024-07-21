import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import './UserForm.css'; // Import custom CSS file for form styling

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://acute-quintana-nonenow-0c12b24d.koyeb.app/addUser', { name, email });
            setName('');
            setEmail('');
            setMessage({ text: 'User added successfully!', type: 'success' });
        } catch (error) {
            setMessage({ text: 'Error adding user. Please try again.', type: 'danger' });
        }
    };

    return (
        <Container className="form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add User
                </Button>
                {message && (
                    <Alert variant={message.type} className="mt-3">
                        {message.text}
                    </Alert>
                )}
            </Form>
        </Container>
    );
};

export default UserForm;
