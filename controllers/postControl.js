const posts = require('../data/post');
function index(req, res) {
    res.send("Lista dei post")
}

function show(req, res) {
    res.send("Dettagli del post (get e :id)")
}
function update(req, res) {
    res.send("Creazione nuovo post (post)")
}
function modify(req, res) {
    res.send("Modifica parziale del post (patch e :id)")
}
function detroy(req, res) {
    res.send("Eliminazione del post (get)")
}
