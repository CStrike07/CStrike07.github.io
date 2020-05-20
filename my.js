var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.get("/", function(req,res){
    res.render("home");
});
app.get("/about", function(req,res){
    res.render("education");
});
app.get("/skill", function(req,res){
    res.render("skills");
});
app.get("/project", function(req,res){
    res.render("projects");
});
app.get("/contact", function(req,res){
    res.render("contact");
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
