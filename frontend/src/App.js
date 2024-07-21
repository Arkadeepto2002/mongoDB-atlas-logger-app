import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const App = () => {
    const [view, setView] = useState('addUser'); // Default view is 'addUser'

    return (
        <div>
            <h1>User Management</h1>
            <nav>
                <button onClick={() => setView('addUser')}>Add User</button>
                <button onClick={() => setView('viewUsers')}>View Users</button>
            </nav>
            {view === 'addUser' && <UserForm />}
            {view === 'viewUsers' && <UserList />}
        </div>
    );
};

export default App;
