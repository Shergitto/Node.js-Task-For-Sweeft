/* const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Dummy database
let companies = [];
let files = [];

// User Registration
app.post('/register', (req, res) => {
    const { companyName, email, password, country, industry } = req.body;
    // Validate input
    // Check if email already exists
    // Generate activation link and send email
    // Add user to database
    companies.push({ companyName, email, password, country, industry, activated: false });
    res.status(201).send('User registered successfully. Please verify your email.');
});

// User Activation
app.get('/activate/:email', (req, res) => {
    const email = req.params.email;
    const company = companies.find(c => c.email === email);
    if (company) {
        company.activated = true;
        res.send('User activated successfully.');
    } else {
        res.status(404).send('User not found.');
    }
});

// File Upload
app.post('/upload', (req, res) => {
    const { filename, fileType, viewingRights } = req.body;
    // Check user's subscription plan and restrictions
    // Store file in database
    files.push({ filename, fileType, viewingRights });
    res.status(201).send('File uploaded successfully.');
});

// Get All Files
app.get('/files', (req, res) => {
    res.json(files);
});

// Change Viewing Rights
app.put('/files/:filename', (req, res) => {
    const filename = req.params.filename;
    const { newViewingRights } = req.body;
    // Update viewing rights in database
    const file = files.find(f => f.filename === filename);
    if (file) {
        file.viewingRights = newViewingRights;
        res.send('Viewing rights updated successfully.');
    } else {
        res.status(404).send('File not found.');
    }
});

// Delete File
app.delete('/files/:filename', (req, res) => {
    const filename = req.params.filename;
    // Remove file from database
    files = files.filter(f => f.filename !== filename);
    res.send('File deleted successfully.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); */

// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an instance of Express app
const app = express();

// Setting up middleware to parse JSON requests
app.use(bodyParser.json());

// Defining a dummy database to store companies and files
let companies = [];
let files = [];

// Route for user registration
app.post('/register', (req, res) => {
    const { companyName, email, password, country, industry } = req.body;
    
    // Logic for user registration (validation, activation link generation, etc.)
    
    // Adding the user to the database
    companies.push({ companyName, email, password, country, industry, activated: false });
    
    // Sending a response indicating successful registration
    res.status(201).send('User registered successfully. Please verify your email.');
});

// Route for user activation
app.get('/activate/:email', (req, res) => {
    const email = req.params.email;
    const company = companies.find(c => c.email === email);
    
    // Logic for user activation
    
    // Sending a response indicating successful activation
    res.send('User activated successfully.');
});

// Route for file upload
app.post('/upload', (req, res) => {
    const { filename, fileType, viewingRights } = req.body;
    
    // Logic for file upload (subscription plan check, file storage, etc.)
    
    // Storing the file in the database
    files.push({ filename, fileType, viewingRights });
    
    // Sending a response indicating successful file upload
    res.status(201).send('File uploaded successfully.');
});

// Route to get all files
app.get('/files', (req, res) => {
    // Sending a JSON response containing all uploaded files
    res.json(files);
});

// Route to change viewing rights of a file
app.put('/files/:filename', (req, res) => {
    const filename = req.params.filename;
    const { newViewingRights } = req.body;
    
    // Logic to update viewing rights of a file
    
    // Sending a response indicating successful update
    res.send('Viewing rights updated successfully.');
});

// Route to delete a file
app.delete('/files/:filename', (req, res) => {
    const filename = req.params.filename;
    
    // Logic to delete a file from the database
    
    // Sending a response indicating successful deletion
    res.send('File deleted successfully.');
});

// Starting the server and listening on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

