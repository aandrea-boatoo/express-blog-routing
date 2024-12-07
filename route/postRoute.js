const express = require('express');
const router = express.Router();
const posts = require('../data/post');
// index

router.get('/', function (req, res) {
    res.send("Lista dei post")

});

// show
router.get('/:id', function (req, res) {
    res.send("Dettagli del post (get e :id)")
});

// update
router.post('/', function (req, res) {
    res.send("Creazione nuovo post (post)")
});

// modify
router.patch('/:id', function (req, res) {
    res.send("Modifica parziale del post (patch e :id)")
});

// destroy
router.delete('/:id', function (req, res) {
    res.send("Eliminazione del post (get)")
});

module.exports = router;