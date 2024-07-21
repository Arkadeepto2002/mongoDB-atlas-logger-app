import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './App.css'; // Import custom CSS file

const App = () => {
    const [view, setView] = useState('addUser');

    return (
        <Container className="mt-5 d-flex flex-column align-items-center">
            <Navbar bg="dark" variant="dark" expand="lg" className="navbar-rounded mb-4">
                <Navbar.Brand href="#home">User Management</Navbar.Brand>
                <Nav className="ml-auto">
                    <Button
                        variant={view === 'addUser' ? 'primary' : 'outline-primary'}
                        onClick={() => setView('addUser')}
                        className="mx-2"
                    >
                        Add User
                    </Button>
                    <Button
                        variant={view === 'viewUsers' ? 'primary' : 'outline-primary'}
                        onClick={() => setView('viewUsers')}
                        className="mx-2"
                    >
                        View Users
                    </Button>
                </Nav>
            </Navbar>
            <div className="w-100">
                {view === 'addUser' && <UserForm />}
                {view === 'viewUsers' && <UserList />}
            </div>
        </Container>
    );
};

export default App;
