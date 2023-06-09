const express = require('express');
const ejs = require("ejs")

const path = require("path");

const app = express();
//Template Engine
app.set("view engine","ejs");

//MIDDLEWARES
app.use(express.static("public"));

//ROUTES
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/add',(req,res)=>{
  res.render('add')
})
app.get('/about',(req,res)=>{
  res.render('about')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server ${port} portunda calistirildi.`);
});
