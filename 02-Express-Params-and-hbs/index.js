// 1. Setup
// import express
const express = require("express");

// import hbs i.e handlebars
const hbs = require('hbs');

// create a new express application
const app = express();

// register hbs as the template engine i.e. view engine
app.set('view engine', hbs);

// 2. Routes
app.get('/', function(req, res){
    res.send("Let's start.")
})

// route parameters i.e placeholder parameters
// the URL below contains 1 parameter, and its key is `userName`. The value is whatever you put as `userName` in the URL.
// we identify parameter keys by the string after `:`.
app.get('/hello/:userName', function(req,res){
    console.log(req.params); // in this case `req.params` is `userName` i.e the key.
    res.send(`Hello ${req.params.userName}`); // `req.params.userName` is whatever value I put after `:`.
})

// below, there are 2 keys (i.e req.params): num1 and num2.
app.get('/add/:num1/:num2', function(req,res){
    console.log(req.params);
    const n1 = parseInt(req.params.num1); // `req.params` is `num1`.
    const n2 = parseInt(req.params.num2); // `req.params` is `num2`.
    const sum = n1 + n2;
    res.send(`Sum of numbers is: ${sum}`)
})

app.get('/contact-us', function(req,res){
    res.send()
})

// 3. Starting the server
app.listen(3000,function(){
    console.log("Server has started.")
})