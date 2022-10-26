const express = require('express');
const app = express();

const blogRoutes = require('./routes/blogs');

// require .env// 
require('dotenv').config();
// add middleware, in this case the 'next' package to log our requests// 
// this will log out the requests that are coming in// 
app.use((req, res, next) => {
    console.log("Path is '" + req.path + "',", "Method is " + req.method);
    next();
})
// add middleware (express.json) which allows us to access req.body for request data // 
app.use(express.json());


//prepend api/blogs to all requests to blogRoutes// 
app.use('/api/blogs', blogRoutes);

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT);
})

