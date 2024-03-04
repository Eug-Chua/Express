const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");

// create a new Express application
const app = express();

// inform Express that we are using hbs as the view engine
app.set("view engine", "hbs");

// apply wax-on to handlebars
waxOn.on(hbs.handlebars)
waxOn.setLayoutPath('./views/layouts'); // location of the layouts

// SETUP ROUTES
app.get('/', function(req,res){
    res.render("index") // note that we can just refer to `index` without calling `index.hbs`
})

app.get('/about-us', function(req,res){
    res.render("about") // note that we can just refer to `about` without calling `about.hbs`
})

app.get('/contact-us', function(req,res){
    res.render("contact") // note that we can just refer to `about` without calling `about.hbs`
})

// START SERVER
app.listen(3005, function(){
    console.log("Server has started.");
})