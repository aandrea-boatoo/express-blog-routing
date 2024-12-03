const express = require("express");
const app = express();
const PORT = 3000;
const posts = require('./post.js');


app.get('/', (req, res) => {
    res.send("Server del mio Blog");
})

app.get('/bacheca', (req, res) => {

    res.json(posts);
})

app.use(express.static('public'));

app.all('*', (req, res) => {
    res.status(404).send('<h1>Pages not found(error404)</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})