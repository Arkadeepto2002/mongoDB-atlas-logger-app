import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                users.map((user) => (
                    <li key={user._id}>
                        {user.name} - {user.email}
                    </li>
                ))
            )}
        </ul>
    );
};

export default UserList;
