// const express = require('express')
import express from 'express'

const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post, app.put or app.delete(path,handler)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('about hello')
})

app.get('/contact',(reg,res)=>{
    res.send('contact hello')
})

app.get('/blog', (req, res) => {
    res.send('blog hello')
})




// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
// })


app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }
    res.send(`hello ${req.params.slug} `)
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})