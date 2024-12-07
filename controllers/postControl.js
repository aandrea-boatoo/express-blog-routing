const posts = require('../data/post');
function index(req, res) {
    res.json(posts)
}

function show(req, res) {
    const id = parseInt(req.params.id); //il parametro viene letto come stringa (   MEGLIO ASSEGNARE ID STRINGA )
    const post = posts.find((post) => post.id === id);
    if (post) {
        res.json(post);
    }
    else {
        res.json({ message: "post non trovato" })
    }
}
function update(req, res) {
    res.send("Creazione nuovo post (post)")
}
function modify(req, res) {
    res.send("Modifica parziale del post (patch e :id)")
}
function destroy(req, res) {
    res.send("Eliminazione del post (get)")
}

module.exports = {
    index, show, update, modify, destroy
}