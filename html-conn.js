const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
    res.sendFile(`${publicPath}/home.html`);
});

app.get('/profile', (_, res) => {
    const user = {
        name: 'harsh',
        email: 'harsh@test.com',
        city: 'surat'
    };
    res.render('profile', { user });
});

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

app.get('/help', (_, res) => {
    res.sendFile(`${publicPath}/help.html`);
});

app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/404page.html`);
});

app.listen(4500);