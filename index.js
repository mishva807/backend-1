require('dotenv').config()
const express = require('express')
//import express from 'express'
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/home', (req, res) => {
    res.send('<h3 style="color : red">welcom to mega backend</h3>')
})

app.get('/login', (req, res) => {
    res.send('<h2 style="color : blue; font-family : Cursive">welcom to mega backend and please login</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
