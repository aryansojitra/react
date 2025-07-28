import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)

  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  //useref hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed){
        str += "0123456789"
      }

       if(numberAllowed){
        str += "#$%^&*!`?><:"
      }

      for (let i = 0; i <= length; i++) {
        let char =Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(char)
        
      }

      setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },
[password])



  useEffect(() => {
    passwordGenerator()
  },
     [length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-4xl text-center mb-4 my-3' >password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white text-black'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex item-center gap-x-1'>
              <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <lable >length : {length}</lable>
            </div>
            <div className='flex item-center gap-x-1'>
                  <input 
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={()=>{
                    setNumberAllowed((prev)=>!prev);
                  }}
                  />
                  <lable htmlFor="numberInput">Numbers</lable>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={()=>{
                    setCharAllowed((prev)=>!prev);
                  }}
                  />
                  <lable htmlFor="characterInput">character</lable>
            </div>
        </div>
     </div>

     

    </>
  )
}

export default App
