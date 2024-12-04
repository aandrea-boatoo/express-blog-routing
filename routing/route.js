const express = require('express');



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


