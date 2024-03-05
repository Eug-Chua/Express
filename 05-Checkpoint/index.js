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

app.get('/booking', function(req,res){
    res.render("booking"); // anything after `res.render` refers to the hbs file from the `views` folder
})

app.post('/booking', function(req,res){
    res.send("Reservation received.");
    let addOns = [];
    if (req.body.addOns) {
        if (Array.isArray(req.body.addOns)) {
            addOns = req.body.addOns;
        } else {
            addOns = [req.body.addOns];
        }
    }
    console.log("selected addons =", addOns);
    // `req` refers to whatever the client sends to the server
    // and the form's data will be captured in `req.body`
    console.log(req.body);
})

// 3. START SERVER
app.listen(3050, function(){
    console.log("Server has started.")
})