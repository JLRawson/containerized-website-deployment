import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { getUsers, createUser, deleteUser, loginUser } from '../services/api';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ username: '', password: '', message: '' });
    const [loginCredentials, setLoginCredentials] = useState({ username: '', password: '' });
    // const history = useHistory();
    const [loginMessage, setLoginMessage] = useState(''); // State to hold the login message


    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleDelete = async (username) => {
        try {
            await deleteUser(username);
            fetchUsers();
        } catch (error) {
            console.error(`Error deleting user ${username}:`, error);
        }
    };

    const handleCreateUser = async (event) => {
        event.preventDefault();
        try {
            await createUser(newUser);
            setNewUser({ username: '', password: '', message: '' });
            fetchUsers();
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(loginCredentials);
            // Handle login success
            setLoginMessage('Login successful!');
            // history.push('/'); // Step 3 - Redirect to homepage
        } catch (error) {
            console.error("Error logging in:", error);
            setLoginMessage('Login failed. Please try again.');
        }
    };


    return (
        <div>
            <h1>User Dashboard</h1>

            <form onSubmit={handleCreateUser}>
                <h2>Create User</h2>
                <input type="text" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} placeholder="Username" />
                <input type="password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} placeholder="Password" />
                <input type="text" value={newUser.message} onChange={(e) => setNewUser({ ...newUser, message: e.target.value })} placeholder="Message" />
                <button type="submit">Create User</button>
            </form>

            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input type="text" value={loginCredentials.username} onChange={(e) => setLoginCredentials({ ...loginCredentials, username: e.target.value })} placeholder="Username" />
                <input type="password" value={loginCredentials.password} onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })} placeholder="Password" />
                <button type="submit">Login</button>
                {loginMessage && <div>{loginMessage}</div>}
            </form>

            <ul>
                {users.map(user => (
                    <li key={user.username}>
                        {user.username} - {user.message}
                        <button onClick={() => handleDelete(user.username)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
