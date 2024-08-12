// index.js
const express = require('express');


const port = 3000;
const app = express();
app.use(express.json());
const login = require('./login');


app.get('/api/firstGet', (req, res) => {
    res.send('Hello from express test');
})

app.post('/api/user', login.createUser)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
