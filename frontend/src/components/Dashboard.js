import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/api';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users when the component mounts
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
            // Delete the user and handle any errors
            await deleteUser(username);
            // Refresh the user list after deletion
            fetchUsers();
        } catch (error) {
            console.error(`Error deleting user ${username}:`, error);
        }
    };

    return (
        <div>
            <h1>User Dashboard</h1>
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
