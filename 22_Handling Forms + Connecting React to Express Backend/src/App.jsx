import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"


  

function App() {
  
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  
  const onSubmit = async (data) => {
    // await delay(2)       // simulating network delay
    console.log(data)
    // if(data.username !== "shubham"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // }
    
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)

  }


  return (
    <>

      {isSubmitting && <div>loading.....</div>}

      <div className='container'>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='userName' {...register("username", { required: {value: true, message:"this field is required"}, minLength :
              {value:3, message:"min length is 3"}, maxLength: {value:8, message:"min length is 8"} })} type='text'></input>

          {errors.username && <div>{errors.username.message} error hai bhai </div>}

          <br></br>

          <input placeholder='password'  {...register("password", {minLength: {value: 7, message: "Min length of password is 7"},})} type="password"/>
          {errors.password && <div className='red'>{errors.password.message}</div>}

          <br></br>
          <input disabled={isSubmitting} type='submit' name = "submit" ></input>
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
        
      </div>
    </>
  )
}

export default App
