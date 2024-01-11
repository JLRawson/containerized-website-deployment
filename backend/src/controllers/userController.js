const UserModel = require('../models/UserModel'); // Import your user model

const userController = {
    // Create a new user
    createUser: async (req, res) => {
        try {
            const newUser = new UserModel(req.body);
            await newUser.save();
            res.status(201).send('User created successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // Retrieve a user by username
    getUserByUsername: async (req, res) => {
        try {
            const user = await UserModel.findOne({ username: req.params.username });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // Update a user's information
    updateUser: async (req, res) => {
        try {
            const updatedUser = await UserModel.findOneAndUpdate(
                { username: req.params.username },
                req.body,
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // Delete a user
    deleteUser: async (req, res) => {
        try {
            await UserModel.findOneAndDelete({ username: req.params.username });
            res.status(200).send('User deleted successfully');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = userController;
