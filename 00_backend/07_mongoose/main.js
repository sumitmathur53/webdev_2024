import mongoose from "mongoose";
import express  from "express";
import { Todo } from "./models/Todo.js";

let con = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get("/", (req, res) =>{

    const todo = new Todo({title: "123", desc:"description of this todo",
    isDone: false, 
    days:Math.floor(Math.random()*45+5*Math.random())})

    todo.save()

    
    res.send("hello this todo is added successfully")


})

app.get('/a', async (req, res) => { 
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})