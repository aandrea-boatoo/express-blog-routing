const express = require("express");
const app = express();
const PORT = 3000;
const posts = require('./data/post.js');

// Asset statici
app.use(express.static('public'));


// Rotte
app.get('/', (req, res) => {
    res.sendFile("index.html", { root: __dirname + "/pages" });
})

app.get('/bacheca', (req, res) => {
    const post = req.query.titolo;
    let response = {
        totalCount: posts.length,
        data: [...posts],
        page: 1,
        status: "ok",
    }
    res.json(response);
})

// ROTTE CRUD

// index

app.get('/posts', function (req, res) {
    res.send("Lista dei post (get)")
});

// show
app.get('/posts:id', function (req, res) {
    res.send("Dettagli del post (get e :id)")
});

// update
app.post('/posts', function (req, res) {
    res.send("Creazione nuovo post (post)")
});

// modify
app.patch('/posts:id', function (req, res) {
    res.send("Modifica parziale del post (patch e :id)")
});

// destroy
app.delete('/posts:id', function (req, res) {
    res.send("Eliminazione del post (get)")
});




app.all('*', (req, res) => {
    res.status(404).send('<h1>Pages not found(error404)</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})