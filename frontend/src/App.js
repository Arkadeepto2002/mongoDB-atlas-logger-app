import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const App = () => {
    const [view, setView] = useState('addUser');

    return (
        <Container className="mt-5">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">User Management</Navbar.Brand>
                <Nav className="ml-auto">
                    <Button 
                        variant={view === 'addUser' ? 'primary' : 'outline-primary'}
                        onClick={() => setView('addUser')}
                    >
                        Add User
                    </Button>
                    <Button 
                        variant={view === 'viewUsers' ? 'primary' : 'outline-primary'}
                        className="ml-2"
                        onClick={() => setView('viewUsers')}
                    >
                        View Users
                    </Button>
                </Nav>
            </Navbar>
            <div className="mt-4">
                {view === 'addUser' && <UserForm />}
                {view === 'viewUsers' && <UserList />}
            </div>
        </Container>
    );
};

export default App;
