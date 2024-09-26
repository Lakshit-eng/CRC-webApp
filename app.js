const express = require("express");
const app = express();
const path = require("path");
const port =3000;

//middle wares

app.set('view engine', 'ejs'); 
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public"))); // or any other template engine like Pug or HBS

//routes

app.get("/addDetails",(req,res)=>{
   res.render("addDetails");
})
app.get("/signup",(req,res)=>{
   res.render("signup");
})
app.get("/",(req,res)=>{
   res.render("index");
})




app.listen(port,()=>console.log(`server is connected to port:${port}`));