const express = require('express');
const app = express();

// require .env// 
require('dotenv').config();
// add middleware, in this case the 'next' package to log our requests// 
// this will log out the requests that are coming in// 
app.use((req, res, next) => {
    console.log("Path is '" + req.path + "',", "Method is " + req.method);
    next();
})


// route handler to respond to requests (generic for now) // 
app.get('/', (req, res) => {
    res.json({message: "welcome to the app!"});
})




app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT);
})

