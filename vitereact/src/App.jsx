import { useState } from 'react'
import Chai from './chai'

/*function MyApp(){
  return(
    <div>
      <h1>custom app | chai</h1>
    </div>
  )
}*/

function App() {
const username = "aryan sojitra"
//{username} evaluted expression

  return (
  <>
    <Chai/>
    <h1>chai aur code {username}</h1> 
    <p>test para</p>
  </>
  )
}

export default App
