const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs")
const blog = require('./routes/blog')


app.use(express.static("public"))

app.use('/blog', blog)


// middleware 1 let say it is logger for application
app.use((req,res,next)=>{
    console.log(req.headers)

    req.sumit = " i am sumit "
    fs.appendFileSync("log.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

// middleware 2
app.use((req,res,next)=>{
    console.log("m2")
    next()
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!" + req.sumit);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
