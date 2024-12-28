const express = require('express');
const app = express();
const port = 5000;

// Serve API endpoint
app.get('/api', (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

// Default route
app.get('/', (req, res) => {
  res.send('Express backend is working!');
});

// Start server
app.listen(port, () => {
  console.log(`Express app running on http://localhost:${port}`);
});
