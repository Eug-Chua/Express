// 1. SETUP
// `require` is known as "importing"; allows us to import `express`
const express = require("express"); 
const hbs = require("hbs");

// create an Express application
const app = express();

// enable for processing for Express
app.use(express.urlencoded({
    extended:false
}))

// setup hbs
app.set('view engine', 'hbs');

// mock database using an array
const database = [
    {
        "id":1,
        "title":"Preloved PS5",
        "price":800.00,
        "payments":["cod", "paynow"],
        "type":"entertainment"
    },
    {
        "id":2,
        "title":"IKEA Mirror",
        "price":30.00,
        "payments":["paynow"],
        "type":"household"
    },
    {
        "id":3,
        "title":"Samsung TV",
        "price":399.99,
        "payments":["cod", "paynow"],
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

app.get('/create-listing', function(req,res){
    res.render('create-listing');
})

app.post('/create-listing', function(req,res){
    console.log(req.body)
    const title = req.body.title;
    const price = req.body.price;
    let payments = []
    if (Array.isArray(req.body.payment)){
        payments = req.body.payments;
    } else if (req.body.payments) {
        // if payments is inputted but isn't an array, set it as an array
        payments = [req.body.payments];
    }
    const type = req.body.type;
    const newProduct = {
        "id": Math.floor(Math.random() * 10000 + 1),
        "title":title,
        "payments":payments,
        "price":price,
        "type":type
    }
    database.push(newProduct)
    
    // Instruct browser to go to a new URL
    res.redirect("/")
})

// 3. START SERVER
app.listen(4100, function(){
    console.log("Server has started.")
})