
import './App.css'
import Navbar from './components/Navbar'

import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, multiply } from './redux/counter/counterSlice'



function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar></Navbar>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        currently count is {count}
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
