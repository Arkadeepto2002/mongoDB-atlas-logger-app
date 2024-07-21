import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Spinner, Alert } from 'react-bootstrap';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getUsers');
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching users.');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <ListGroup>
            {users.length === 0 ? (
                <Alert variant="info">No users found.</Alert>
            ) : (
                users.map((user) => (
                    <ListGroup.Item key={user._id}>
                        {user.name} - {user.email}
                    </ListGroup.Item>
                ))
            )}
        </ListGroup>
    );
};

export default UserList;
