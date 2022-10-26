const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel');
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
// use model to add new document to blogs db collection// 
router.post('/', async (req, res) => {
    const {title, reps, load} = req.body

    try {
        const blog = await Blog.create({title, load, reps})
        res.status(200).json(blog)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

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