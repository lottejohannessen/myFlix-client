import React, { useState } from 'react';
import Proptypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthday);
        axios.post('https://lotte-johannessen-myflixdb.herokuapp.com/users', {
            // Username: username,
            // Password: password,
            // Birthday: birthday,
            // Email: email
            Username: username, // redux
            Password: password,
            Birthday: birthday,
            Email: email
        })
            .then(response => {
                const data = response.data;
                console.log(data);
                window.open('/', '_self'); //self: page will open in the current tab
            })
            .catch(e => {
                console.log('error at registration')
        });
        props.onRegister(username);
    }

    return (
        <Form>
            <Form.Group controlId='registerUsername'>
                <Form.Label>Username:</Form.Label>
                <Form.Control type='text' onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId='registerPassword'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type='password' onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId='registerEmail'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type='text' onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId='registerBirthday'>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control type='text' onChange={e => setBirthday(e.target.value)} />
            </Form.Group>
            
            <Button variant='primary' type='submit' onClick={handleSubmit}>
                Submit
            </Button>
            <Button variant='primary' onClick={props.toggleRegister}>
                Existing User
            </Button>
            
        </Form>
    )

}
RegistrationView.Proptypes = {
    onRegister: Proptypes.func.isRequired
};
