# Create-your-Task

This project is made by express js  and node js. where you can create a task with full description and display it when you want to display.

Here’s a quick guide on how to install Node.js, Express.js, and EJS, along with links to their official documentation.

---

## 1. Node.js Installation
Installation Steps:

-> Windows:

Download the Node.js installer from the official Node.js website.
Run the installer and follow the prompts.
Verify installation by running ```node -v``` and ```npm -v``` in your command prompt.

Node.js Official Documentation

## 2. Express.js Installation
Installation Steps:
First, ensure that Node.js and npm are installed.
Create a new project directory and navigate to it:
```
mkdir my-express-app
cd my-express-app
Initialize a new Node.js project:

npm init -y
Install Express.js:
bash
Copy code
npm install express
```


## 3. EJS Installation
Installation Steps:
Make sure you have Express.js installed.
Install EJS in your project:
```
npm install ejs
```
Basic EJS Setup:
Here’s how you can set up EJS with Express.js:

```
const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'EJS Example' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```
Create a folder named ```views``` and create a file named ```index.ejs``` inside it. Here’s a simple example for index.ejs:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1>Welcome to EJS!</h1>
</body>
</html>
```
Documentation:
EJS Official Documentation

## Summary
- Node.js: Install Node.js and npm. Use the Node.js documentation for detailed guidance.
  
- Express.js: Install Express in your Node.js project. Refer to the Express.js documentation for more info.
  
- EJS: Install EJS as your templating engine for Express. Check the EJS documentation for details.
