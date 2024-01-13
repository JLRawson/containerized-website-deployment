
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import user routes
require('dotenv').config();
const dbConnection = process.env.MONGO_API_URL;


const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Database connection
mongoose.connect(dbConnection) //mongodb://admin:password@mongo:27017/  when switching to docker
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use user routes
app.use('/api', userRoutes);

// Handle undefined routes with a 404 middleware
app.use((req, res, next) => {
  res.status(404).send('Endpoint not found');
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 2999;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
