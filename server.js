const express = require('express')
const app=express();
const port = process.env.PORT || 3000;
const path = require('path')


const st_path =path.join(__dirname,"/public")

app.set("view engine","hbs")
// app.use(express.static(st_path))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/getdata",(req,res)=>{
    res.render("getdata")
})

app.get("/getdata/instructions",(req,res)=>{
    res.render("instructions")
})


app.get("/instructions/test",(req,res)=>{
    res.render("test")
})


app.listen(port,()=>{
    console.log('Server is running on Port 3000')
})
