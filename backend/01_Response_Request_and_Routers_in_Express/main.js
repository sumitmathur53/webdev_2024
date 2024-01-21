const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000



app.use(express.static("public"))

app.use('/blog', blog)

app.get('/', (req, res) => {

    console.log("hey it is get request")
    res.send('Hello World2!')
})

app.post('/', (req, res) => {
    console.log("het is post request")
    res.send('Hello World2! this is post request')
})

app.put('/', (req, res) => {
    console.log("het is put request")
    res.send('Hello World2! this is put request')
})

app.delete('/', (req, res) => {
    console.log("het is delete request")
    res.send('Hello World2! this is delete request')
})


app.get('/about', (req, res) => {

    console.log("hey this is about")
    res.sendFile('templates/about.html',{root:__dirname})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

