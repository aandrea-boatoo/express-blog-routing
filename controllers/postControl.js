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

function store(req, res) {
    // creazione nuovo id
    console.log(req.body)
    let newId = 0;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id > newId) {
            newId = posts[i].id;
        }
    }
    newId += 1 //?????????????

    // creazione nuovo elemento
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        img: req.body.img,
        tags: req.body.tags,
    }
    posts.push(newPost);
    res.status(201).json(newPost);
    // res.send("creazione post");
}
function update(req, res) {
    const id = parseInt(req.params.id);
    const modPost = req.body;
    posts[id - 1] = modPost;
    console.log(modPost);
    console.log(posts);
    res.json({ message: `post n. ${id} modified correctly` });
}
function modify(req, res) {
    res.send("Modifica parziale del post (patch e :id)")
}
function destroy(req, res) {
    const id = parseInt(req.params.id);
    const indexPost = posts.findIndex((post) => post.id === id);
    if (indexPost !== -1) {
        posts.splice(indexPost, 1);
        res.status(201).send("post cancellato");
    } else {
        res.status(404).json({ message: "post non trovato" })
    }
    console.log(posts);
}

module.exports = {
    index, show, store, update, modify, destroy
}