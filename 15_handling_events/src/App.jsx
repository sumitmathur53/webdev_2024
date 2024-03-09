import { useState } from 'react'

import './App.css'

function App() {
  
  // const [name, setname] = useState("sumit")
  const [form, setForm] = useState({email:"", phone:""})
  
  const handleClick = () => {
    alert("hey i am clicked")
  }

  const handleMouse = () => {
    alert("hey i am mouse over")
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value} )
  }

  return (
    <>

      <div className='button'>
          <button onClick={handleClick}> click me </button>
      </div>

      <div className='red' onMouseOver={handleMouse}>
          i am a red div 
      </div>

      <input type='text' name = "email" value={form.email} onChange={handleChange} /> 
      <input type='text' name ='phone' value = {form.phone} onChange={handleChange} ></input>

      
    </>
  )
}

export default App
