var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var Handlebars = require("handlebars");

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


//override POST having '?_method=DELETE'
app.use(methodOverride("-method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

//routing
app.get("/", function(req, res){
    //function to pull saved games from local memory
    res.render("home")
});


app.listen(port, function(){
    console.log(`App listening on PORT: ${port}`)
});