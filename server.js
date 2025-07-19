const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Import the router
const booksRouter = require('./routes/books');

// Use the router
app.use('/books', booksRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
