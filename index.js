const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define the main route
app.get('/', (req, res) => {
  res.send('Hello from Azure Pipelines!');
});

// Only start the server when run directly (not imported)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export the app for testing
module.exports = app;