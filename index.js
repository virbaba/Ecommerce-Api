// start of placement cell website
// import express
const express = require('express');

// creating express app
const app = express();

// defining port
const port = 1001;

// import mongoose
const mongoose = require('./config/mongoose');

// for getting the post request
app.use(express.urlencoded());

// for getting the json request
app.use(express.json());


// using router
app.use('/', require('./router'));

// listening on port
app.listen(port, (err)=>{
    if(err){
        console.log('error in listening');
    }
    console.log(`sun liya on ${port}`);
})