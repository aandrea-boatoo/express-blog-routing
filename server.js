const express = require("express");
const app = express();
const PORT = 3000;
const posts = require('./data/post');
const postRouter = require('./route/postRoute.js');
// Asset statici
app.use(express.static('public'));

// Rotte
app.get('/', (req, res) => {
    res.sendFile("index.html", { root: __dirname + "/pages" });
})


// COLLEGAMENTO ROUTERS
app.use('/posts', postRouter);

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

app.all('*', (req, res) => {
    res.status(404).send('<h1>Pages not found(error404)</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})