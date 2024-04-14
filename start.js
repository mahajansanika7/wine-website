import express from "express"; 
import { convert } from "html-to-text";
// import path from "express";
import bodyParser from "body-parser";
import pg from "pg";
// import * as path from 'path';
import path from 'path';
import { log } from "console";
// import { fileURLToPath } from 'url';
// const path = require('path');
// const express=require('express');
// const {Client}=require('pg');
// const bodyParser=require('body-parser');


const app = express();
const port = 3000;
app.set('view engine', 'ejs'); 

const db=new pg.Client({
  user:"postgres",
  database:"user",
  host: "localhost",
  password:"pass@123",
  port:5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname+"/public"));
app.use(express.static(path.join('dist', 'public')));
app.use(express.static("dist/public/styles"))
app.use(express.static("dist/public/styles/dependencies"))

// app.use(express.static("/javascript"));

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(__dirname + '/public'));

app.get("/", async(req, res) => {
  res.render("home.ejs");
  convert:convert;
});

app.get("/about", async(req, res) => {
  res.render("about.ejs");
});

app.get("/login", async(req, res) => {
  res.render("login.ejs");
});

app.get("/signup", async(req, res) => {
  res.render("signup.ejs");
});

app.get("/home", async(req, res) => {
  res.render("home.ejs");
});

app.get("/addtocart", async(req, res) => {
  res.render("addtocart.ejs");
});

app.get("/payment", async(req, res) => {
  res.render("payment.ejs");
});


app.post("/submit",async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // const values=await db.query("select * from user");
  // if(email==values.email){
  //   res.render("signup.ejs",{exists:"User already exists"});
  // }
  await db.query("insert into wine_user(email,password) values($1,$2)",[email,password]);
  // res.render("../../../Wine-Shop-Website/index.html");
  res.render("home.ejs");
});

app.post("/loginSubmit",async(req,res)=>{
  const email1=req.body.email;
  const password1=req.body.password;
  const values=await db.query("select * from wine_user where email=($1)",[email1]);
  // console.log(values);
  if(values.rows.length === 0){
    res.render("signup.ejs");
  }
  else{
    res.render("home.ejs");
  }
})

app.listen(port,()=>{
  console.log("runnning on 3000");
})



