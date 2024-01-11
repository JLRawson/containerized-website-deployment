const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 2999; // You can change the port if needed

// MongoDB URI and Database Name
const uri = "mongodb://admin:password@localhost:27017";
const dbName = "prod"; // Replace with your database name

// MongoDB Client
const client = new MongoClient(uri);

app.get('/alldata', async (req, res) => {
  try {
      await client.connect();
      const database = client.db(dbName);
      const collection = database.collection('user');
      const data = await collection.find({}).toArray();
      if (data.length === 0) {
          return res.status(404).send('No data found in the collection');
      }
      res.json(data);
  } catch (e) {
      console.error('Error occurred:', e);
      res.status(500).send("Error fetching data from MongoDB: " + e.message);
  } finally {
      await client.close();
  }
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes'); // Import user routes

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Middleware for CORS (Cross-Origin Resource Sharing)
// app.use(cors());

// // Database connection
// mongoose.connect('mongodb://localhost:27017/prod')
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Use user routes
// app.use('/api', userRoutes);

// // Handle undefined routes with a 404 middleware
// app.use((req, res, next) => {
//   res.status(404).send('Endpoint not found');
// });

// // Error handling middleware
// app.use((error, req, res, next) => {
//   console.error(error.stack);
//   res.status(500).send('Something broke!');
// });

// // Start the server
// const PORT = process.env.PORT || 2999;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
