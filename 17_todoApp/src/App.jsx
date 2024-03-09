import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])  // todos is array

  const [showFinished, setshowFinished] = useState(true)

  // use effect that run on single time

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const handleDelete = (e,id)=>{
    console.log(`the id ${id}`)
    setTodos(todos.filter(todo => todo.id!== id))
    saveToLS()
  }

  const handleEdit = (e,id)=>{
    let t = todos.filter(item=> item.id===id)
    setTodo(t[0].todo)
    setTodos(todos.filter(todo => todo.id!== id))
    saveToLS()
  }

  const handleAdd = ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted : false}])
    setTodo("")
    saveToLS()
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  const handlCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {return item.id === id})

    let newTodos = [...todos]

    newTodos[index].isCompleted =!newTodos[index].isCompleted
    
    setTodos(newTodos)
    saveToLS()
        
  }
  

  return (
    <>
      <Navbar></Navbar>

      <div className=' mx-3 md:container md:mx-auto my-5 rounded-xl bg-violet-200 p-5 min-h-[80vh] md:w-1/2'>
        
        <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>

        <div className='addTodo my-5 flex flex-col gap-4'>
          <h2 className='text-lg font-bold'>Add a todo</h2>
          <input onChange={handleChange} value={todo} type='text' className='w-full rounded-full px-5 py-1'></input>
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md font-bold text-sm'>Save</button>
        </div>

        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div> 
        
        <h2 className=' text-lg font-bold'>Your Todos</h2>
        
        <div className='Todos'>

          {todos.length === 0 && <div className='m-5'> No todos to display </div>}

          {todos.map(item=>{

            return (showFinished || !item.isCompleted) && <div key={item.id} className='todo flex w-2/3 justify-between my-3 md:w-1/2'>

              <div className='flex gap-5 justify-between'>
                <input name={item.id} type='checkbox' onChange={handlCheckbox} checked={item.isCompleted}></input>
                <div className={item.isCompleted?"line-through" : " "}>{item.todo}</div>
              </div>
              
              <div className='buttons flex h-full justify-between'>
                <button onClick={(e)=>handleEdit(e,item.id)} className='bg-violet-800 mx-1 hover:bg-violet-950 p-3 py-1 text-white rounded-md font-bold text-sm'><FaEdit /></button>
                <button onClick={(e)=>handleDelete(e,item.id)} className='bg-violet-800 mx-1 hover:bg-violet-950 p-3 py-1 text-white rounded-md font-bold text-sm'><AiFillDelete /></button>
              </div>

              </div> 

          })}
          
        </div>
        
      </div>
      
    </>
  )
}

export default App
