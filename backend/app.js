require('dotenv').config();

const express = require('express');
const app=express();


const homeRoute= require('./routes/homeRoute')

const connectToDb= require('./config/db');
// const { urlencoded } = require('body-parser');
// middleware
connectToDb();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use( homeRoute)
// app.get('./create', homeRoute)
module.exports = app