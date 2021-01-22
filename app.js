// modules and set up
const express = require ("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const posts=[];

// home page
app.get("/", function(req, res){
  res.render("home");
})

// results

app.post("/results", function(req, res){
  const userName = req.body.userName;
  res.render("results", {
      userName: userName
  });
});

app.get("/book",function(req,res){
  res.render("book");
});

app.get("/movie",function(req,res){
  res.render("movie");
});

app.get("/music",function(req,res){
  res.render("music");
});

app.get("/food",function(req,res){
  res.render("food");
});

//Journal
app.get("/journal", function(req,res){
  res.render("journal");
});

app.get("/compose", function(req, res){
  res.render("compose", {
    posts:posts
  });
});

app.post("/compose", function(req,res){
  const post = {
    postBody: req.body.postBody,
    title: req.body.title
  };
  posts.push(post);
  res.render("compose", {
    posts:posts
  });
});

// about us
app.get("/aboutus", function(req,res){
  res.render("aboutus");

});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
