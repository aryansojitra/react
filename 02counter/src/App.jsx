import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5

  const addValue = () =>{
    console.log("clicked", counter);
    counter = counter +1
    setCounter(counter)
  }

  const removeValue = () =>{
    counter = counter - 1
    if(counter>=0){
    setCounter(counter)
    }
  }

  return (
    <>
      <h1>aryan sojitra</h1>
      <h3>counter value : {counter}</h3>
      <button   onClick={addValue}
      >add value {counter}</button>
    
      <br />
      <button onClick={removeValue} 
      >remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
