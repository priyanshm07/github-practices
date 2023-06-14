const express = require('express');
const app = express();
const port = 3000;

app.get('/', async(req, res) => {
    res.status(200).json({
        route: '/',
        message: 'Home'
    })
})

app.listen(port, () => {
    console.log('Server running...');
    console.log('http://localhost:3000')
})