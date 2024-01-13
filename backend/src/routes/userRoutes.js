const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.get('/users/:username', userController.getUserByUsername);
router.put('/users/:username', userController.updateUser);
router.delete('/users/:username', userController.deleteUser);
router.get('/allusers', userController.getAllUsers);
router.post('/login', userController.loginUser);

module.exports = router;
