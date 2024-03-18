// 1. SETUP
// `require` is known as "importing"; allows us to import `express`
const express = require("express"); 
const hbs = require("hbs");

// create an express application
const app = express();

// setup hbs
app.set('view engine', 'hbs');

// mock database using an array
const database = [
    {
        "id":1,
        "title":"Preloved PS5",
        "price":800.00,
        "payment":["cod", "paynow"],
        "type":"entertainment"
    },
    {
        "id":2,
        "title":"IKEA Mirror",
        "price":30.00,
        "payment":["paynow"],
        "type":"household"
    },
    {
        "id":3,
        "title":"Samsung TV",
        "price":399.99,
        "payment":["cod", "paynow"],
        "type":"electronics"
    }
]

// 2. ROUTING
app.get("/", function(req,res){
    // `render` and send back the content of `index.hbs` as content
    // note that file path is, by default, relative to the `views` folder; no need to specify `views/index.hbs`
    res.render("index", {
        'products':database
    });
})

// 3. START SERVER
app.listen(4100, function(){
    console.log("Server has started.")
})