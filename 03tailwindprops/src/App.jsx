import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    uesrname:"aryan",
    age:21
  }

  return (
    <>
      <h1 className="font-semibold border-10 bg-green-400 text-red-300 rounded-5xl mb-5">tailwind test</h1>
      <Card username="aryan sojitra" btnText="click me" />
      <Card username="aryan rank" btnText="visit me" />
    </>
    
  )
}

export default App
