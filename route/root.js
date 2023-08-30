// Import the Express.js library
const express = require('express');
// Create an Express application instance
const root = express();
// Define a route that handles GET requests to the root path '/'
root.get('/', (req, res) => {
    // When a GET request is made to '/', send the specified HTML file as a response
    res.sendFile('C:\Users\lenovo\OneDrive\Desktop\projects\kalvium-Backend\app.html');
});
// Export the Express application instance to be used in other parts of your application
module.exports = root;
