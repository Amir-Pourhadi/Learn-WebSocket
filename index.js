const express = require("express");
const app = express();

// Define the port to run on
const port = process.env.PORT || 8080;

// Serve static files
app.use(express.static("public"));

// Listen to the port
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
