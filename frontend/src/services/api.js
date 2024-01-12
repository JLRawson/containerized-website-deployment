const API_URL = 'http://localhost:2999/api';

// Fetch all users
export const getUsers = async () => {
    try {
        const response = await fetch(API_URL + '/allusers');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

// Fetch a single user by username
export const getUserByUsername = async (username) => {
    try {
        const response = await fetch(`${API_URL}/users/${username}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching user by username:", error);
        throw error;
    }
};

// Create a new user
export const createUser = async (userData) => {
    try {
        const response = await fetch(API_URL + '/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

// Update an existing user
export const updateUser = async (username, userData) => {
    try {
        const response = await fetch(`${API_URL}/users/${username}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

// Delete a user
export const deleteUser = async (username) => {
    try {
        const response = await fetch(`${API_URL}/users/${username}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};
