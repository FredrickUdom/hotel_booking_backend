const mongoose = require('mongoose');

const connectionString = process.env.DB_URI;

mongoose.connect(connectionString)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});

module.exports = mongoose;