const express = require('express');
const router = express.Router();
//so the home route ('/') is prepended with '/api/blogs' ///


// to GET all blogs //
router.get('/', (req, res) => {
    res.json({message: "GET all blogs"})
});

// to GET a single blog //
router.get('/:id', (req, res) => {
    res.json({message: "GET single blog"})
});

// to POST a single blog ///
router.post('/:id', (req, res) => {
    res.json({message: "POST a single blog"})
});


// to UPDATE a single blog //
router.patch('/:id', (req, res) => {
    res.json({message: "UDPATE a single blog"})
});

// to DELETE a single blog //
router.delete('/:id', (req, res) => {
    res.json({message: "DELETE a single blog"})
});
module.exports = router;