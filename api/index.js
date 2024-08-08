// index.js
const express = require('express');
const port = 3000;
const app = express();


app.get('/api/firstGet', (req, res) => {
    res.send('Hello from express');
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});