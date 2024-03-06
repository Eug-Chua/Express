// 1. SETUP
const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

// create an Express applicaiton
const app = express();
// set `hbs` as our view engine
app.set("view engine", "hbs");

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable form processing
app.use(express.urlencoded({
    extended: false
}))

// 2. ROUTING
app.get('/', function(req, res){
    res.render("index"); // we can put `index` or `index.hbs`; both works.
})

// 3. START SERVER
app.listen(3050, function(){
    console.log("Server has started.")
})