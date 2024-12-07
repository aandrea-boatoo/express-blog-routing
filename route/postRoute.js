const express = require('express');
const router = express.Router();
const { index, show, update, modify, destroy } = require('../controllers/postControl');
// index

router.get('/', index);

// show
router.get('/:id', show);

// update
router.post('/', update);

// modify
router.patch('/:id', modify);

// destroy
router.delete('/:id', destroy);

module.exports = router;