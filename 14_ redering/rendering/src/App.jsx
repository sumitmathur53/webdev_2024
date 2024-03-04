import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showbtn, setshowbtn] = useState(true)

  const [todos, settodos] = useState([
    {
      title: "hey 1",
      desc: "Welcome 2"
    },
    {
      title: "hey 2",
      desc: "Welcome 3"
    },
    {
      title: "hey 3",
      desc: "Welcome 4"
    },
    {
      title: "hey 4",
      desc: "Welcome 5"
    }

  ])

  // const Todo = ({todo})=>{ return(<>

  //   <div className=' border m-4 border-cyan-400 '>

  //     <div className='todo'> {todo.title}  </div>
  //     <div className='todo'> {todo.desc}  </div>

  //   </div>

  // </>)}


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {showbtn ? <button> show btn is true </button> :
        <button> show btn is false </button>}

      {/* {showbtn && <button> show btn is true </button>} */}

      {todos.map(todo => {
        {/* return <Todo key={todo.title} todo={todo}/> */ }

        return <div key={todo.title} className=' border m-4 border-cyan-400 '>

            <div className='todo'> {todo.title}  </div>
            <div className='todo'> {todo.desc}  </div>

        </div>

      })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
