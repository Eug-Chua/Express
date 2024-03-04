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

// custom helpers - make sure they're before the SETUP ROUTES step 
// first parameter: refers to the name of the helper;
// second parameter: refers to the function called when we use the helper
hbs.handlebars.registerHelper("ifEquals",
 function(arg1, arg2, options){
    if (arg1 == arg2) {
        return options.fn(this); // `this` refers to the hbs file; specifically it is zooming into `#ifEquals` (the helper we initiated).
    } else {
        return options.inverse(this); 
    }
}); 

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

app.get('/fruits', function(req, res){
    const fruits = ["apples", "oranges", "bananas"];
    const favorite = "apples"
    res.render('fruits', {
        "fruits":fruits,
        "favorite":favorite,
        "isRaining":true
    })
})

// START SERVER
app.listen(3005, function(){
    console.log("Server has started.");
})