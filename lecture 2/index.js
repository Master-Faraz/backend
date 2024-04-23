// Express is used to create server
// Both are same import express from 'express'
const express = require('express')

require('dotenv').config()

// now we created a variable from express to use express functionality 
const app = express()
// const port = 4000 //. Server listen at port 4000

// We are using get request from app, It takes two parameter - (PATH or route , CALLBACK) 
// Here we are listning at home dir and send a response 'Hello World!' to it at port 4000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send("faraz_Twitter@")
})

app.get('/login', (req, res) => {
  res.send("<h1>Please login at my app</h1>")
})

// Our app is continuously listning at port 4000 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})