const express = require('express')
const path = require('path')
const app = express()
let file
app.use('/Images', express.static('Images'))
app.use('/CSS', express.static('CSS'))
app.use('/JavaScript', express.static('JavaScript'))
app.get('/',(req,res) => {
    file = path.join(__dirname, '/HTML/index.html')
    res.sendFile(file)
})
app.get('/index.html', (req,res) => {
    file = path.join(__dirname, '/HTML/index.html')
    res.sendFile(file) 
})
app.get('/contact.html', (req,res) => {
    file = path.join(__dirname, '/HTML/contact.html')
    res.sendFile(file) 
})
app.get('/login.html', (req,res) => {
    file = path.join(__dirname, '/HTML/login.html')
    res.sendFile(file) 
})
app.get('/registration.html', (req,res) => {
    file = path.join(__dirname, '/HTML/registration.html')
    res.sendFile(file) 
})
app.listen(3000)