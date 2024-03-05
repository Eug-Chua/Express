const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");
const app = express();

// inform Express that we are using hbs as the view engine
app.set("view engine", "hbs");

// apply wax-on to handlebars
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath('./views/layouts');

// enable static files
app.use(express.static('public'));

// enable form processing - without this line, we can't read data from forms
app.use(express.urlencoded({
    'extended':false // we set `extended` to `false` in order to save processing power. Switch to `true` for advanced features.
}))

// SETUP ROUTES
// When we are using forms, GET routes are used to dispaly forms
app.get('/survey', function(req, res){
    res.render("survey") // note that we can just refer to `survey` without calling `survey.hbs`
})

// POST routes are for receiving data from the browser; the browser POSTs the data
app.post('/survey', function(req, res){
    console.log(req.body); // outputs what is in the body of `survey.hbs`; in this case it is `firstName`
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    let hobbies = [];
    if (req.body.hobbies) {
        if (Array.isArray(req.body.hobbies)) {
            hobbies = req.body.hobbies;
        } else {
            hobbies = [req.body.hobbies];
        }
    }
    res.render('summary', {
        "firstName":firstName,
        "lastName":lastName,
        "gender":gender,
        "hobbies":hobbies,
        "country":req.body.country
    })
})

// START SERVER
app.listen(3005, function(){
    console.log("Server has started.")
})