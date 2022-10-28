const Blog = require('../models/blogModel');
const mongoose = require('mongoose');


// Controller for GET all // 
const getBlogs = async (req, res) => {
    // this line will use Blog model to get all blogs (so empty curly braces for Mongo to get all)//
    // and then return returns sorted by time created, newest first (the -1).// 
    const blogs = await Blog.find({}).sort({createdAt: -1})
res.status(200).json(blogs)
}

//Controller for GET single // 
const getBlog = async (req, res) => {
    const { id } = req.params
    //grab id property from route parameters//
    // use Blog model to find blog by id// 
    // use mongoose to verify id is a valid Mongo-type id /// 
    // so take id from route parameters, verify if valid using Mongoose before anything else//

    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Blog not found' })
    }

    const blog = await Blog.findById(id)

    if (!blog) {
        return res.status(404).json({ message: 'Blog not found' })
    }

    res.status(200).json(blog)
}

//Controller for POST //
//add document to db via this controller// 
// this is a better organized practice
const createBlog = async (req, res) => {
const {title, reps, load} = req.body


    try {
        const blog = await Blog.create({title, load, reps})
        res.status(200).json(blog)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }}

//Controller for PATCH single // 


// Controller for DELETE single // 


module.exports = { 
    getBlogs,
    getBlog,
    createBlog }