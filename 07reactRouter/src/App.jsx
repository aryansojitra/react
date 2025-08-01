import { useState } from 'react'
import Header from './components/header/header.jsx'
import './App.css'
import Footer from './components/footer/footer.jsx'
import Home from './components/home/home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Home />
     <Footer />
    </>
  )
}

export default App
