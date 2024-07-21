import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/addUser', { name, email });
            setName('');
            setEmail('');
            alert('User added successfully!');
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Error adding user. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </label>
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
