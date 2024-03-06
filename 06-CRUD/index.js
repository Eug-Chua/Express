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

// In-memory database
const foodRecords = [
    {
        id: 1,
        foodName: "Chicken Rice",
        calories: 500,
        meal:"lunch",
        tags:["organic", "less oil"]
    },
    {
        id:2,
        foodName: "Clam Chowder",
        calories: 450,
        meal:"dinner",
        tags:["homecooked"]
    },
    {
        id:3,
        foodName:"Tuna Sandwich",
        calories: 390,
        meal: "breakfast",
        tags:["gluten-free"]
    }
]

// 2. ROUTING
app.get('/', function(req, res){
    res.render("index", {
        foodRecords:foodRecords
    }); // we can put `index` or `index.hbs`; both works.
})

// route to display the form
app.get('/create', function(req,res){
    res.render('create');
})

// route to process the form
app.post('/create', function(req,res){
    let selectedTags = [];
    if (req.body.tags){
        if (Array.isArray(req.body.tags)) {
            selectedTags = req.body.tags;
        } else {
            selectedTags = [req.body.tags];
        }
    }

    const newfood = {
        id: Math.floor(Math.random() * 10000 + 1),
        foodName: req.body.foodName,
        calories: req.body.calories,
        meal: req.body.meal,
        tags: selectedTags,
    };
    foodRecords.push(newfood);
    
    // `res.direct()` tells the browser to go to the specified URL after action is done
    res.redirect('/')
    console.log(req.body);
})

// 3. START SERVER
app.listen(3050, function(){
    console.log("Server has started.")
})