import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target='-bland'>visit google</a>
)

const anotherUser = "aryan rank"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target: '_blank'},
  'click me to visit google',
  anotherUser

)

createRoot(document.getElementById('root')).render(
 reactElement
)
