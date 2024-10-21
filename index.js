/*        BACKEND - Learn With Logic
-------------------------------------------- */

// installed Express js
// installed EJS
// installed nodemon


const express = require('express');
const fs = require('fs');
const path = require('path'); // Added to handle file paths
const app = express();

// This is used for encoding the Data in readable format.
// Middleware to parse incoming POST requests (e.g., form data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // For parsing JSON requests if needed


// Setup Static Files
app.use(express.static('./public'));
app.use('/Files', express.static(path.join(__dirname, 'Files')));


// Set the Template Engine = EJS
app.set('view engine', 'ejs');


app.get("/", function(req, res, next) {
    fs.readdir("./Files", function(err, files) { // Changed readFile to readdir
        if (err) {
            return next(err); 
        }
        console.log(files); 
        res.render("tasklist", { files: files });
    });
});

// Ensure the filename in the POST route is constructed correctly
app.post("/create", function(req, res, next) {
    const fileName = `${req.body.title.split(' ').join('')}.txt`; 
    fs.writeFile(`./Files/${fileName}`, req.body.details, 'utf-8', (err) => { // Correct the syntax for writeFile
        if (err) {
            return next(err); 
        }
        res.redirect("/"); // Redirect after successful write
    });
});

 app.get("/file/:name", (req, res) => {
    const filePath = path.join(__dirname, 'Files', req.params.name);
    fs.readFile(filePath, "utf-8", (err, filedata) => {
        res.render('info', { filedata : filedata, filename : req.params.name});
    });
});


// Error Handling Middleware
app.use(function(err, req, res, next) {
    console.error(err.stack); // Log the error stack trace
    res.status(500).send('Internal Server Error: ' + err.message); // Respond with a 500 status and error message
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

