const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Hello, This is Home Page');    
});

app.get('/about', (req, res) => {
    res.send('Hello, This is About Page');    
});

app.listen(4500);