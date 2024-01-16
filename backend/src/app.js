
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const dbConnection = process.env.MONGO_API_URL;
const app = express();
app.use(express.json());

const corsOptions = { // allow requests from the frontend
  origin: 'http://127.0.0.1:58927', 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

mongoose.connect(dbConnection) 
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

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
