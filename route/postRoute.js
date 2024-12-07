const express = require('express');
const router = express.Router();
const posts = require('./data/post.js');
// index

router.get('/posts', function (req, res) {
    res.send("Lista dei post")

});

// show
router.get('/posts:id', function (req, res) {
    res.send("Dettagli del post (get e :id)")
});

// update
router.post('/posts', function (req, res) {
    res.send("Creazione nuovo post (post)")
});

// modify
router.patch('/posts:id', function (req, res) {
    res.send("Modifica parziale del post (patch e :id)")
});

// destroy
router.delete('/posts:id', function (req, res) {
    res.send("Eliminazione del post (get)")
});

module.exports = router;