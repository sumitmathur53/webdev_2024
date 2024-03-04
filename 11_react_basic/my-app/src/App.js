import { useState } from 'react';
import './App.css';
import Navar from './component/Navar';


function App() {

  const [value, setValue] = useState(0)

  return (

    <div className="App">
      <Navar logoText = "sumit_logo_text"></Navar>
      <div className='value'> {value} </div>
      <button onClick={()=>{setValue(value+1)}}>click me</button>
    </div>

  );
}

export default App;
