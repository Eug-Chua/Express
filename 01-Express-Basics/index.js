// use `require` to import nodeJS library
const express = require("express");

// initiate an express application
const app = express();

// define a route
// `app.get` requires 2 arguments: (i) the URL fragment (ii) function to be executed
// the route in the example below is `about-us`
// when we run `app.get()`, the browser tries to access the `about-us` page, and the function gets executed
app.get("/about-us", function(req,res){
    res.send("<h1>About Us</h1>")
})

// add another route: contact us
app.get("/contact-us", function(req,res){
    res.send(`<form>
        <label>Your Email</label>
        <input type="text" name="email"/>
    </form>`)
})

// add another route: lucky number
app.get("/lucky-number", function(req,res){
    const luckyNumber = Math.floor(Math.random() * 9999 + 1000);
    res.send(`Your lucky number is ${luckyNumber}.`);
})

app.listen(3000,function(){
    console.log("Server has started.")
})