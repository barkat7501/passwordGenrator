import './App.css'

import React, { useCallback, useEffect, useState } from 'react'

function App() {

const [ length,setLength] = useState(8)
const [ numberAllowed,setNumberAllowed] = useState(false)

const [ charAllowed,setCharAllowed] = useState(false)

const [password,setPassword] = useState("")

let passwordGenrator = useCallback(()=>{

 let pass = ""
let str = "ABCDEFGHIJKLMNOPQRStuvivdjkfnvdfbvdklNJNDJKN"

if (numberAllowed) {

  str += "01234567890"
  
}

if (charAllowed) {
  str += "!@#$%^!@##@$%^&*()()_"
}
for (let i = 1; i<= length; i++) {

let character =  Math.floor(Math.random() * str.length + 1)

pass += str.charAt(character)

  
}
setPassword(pass)

},[length,numberAllowed,charAllowed,setPassword])


useEffect(()=>{passwordGenrator()},[length,numberAllowed,charAllowed,passwordGenrator])




const copyPasswordToClipboard = useCallback(()=>{

window.navigator.clipboard.writeText(password)











},[password])





  return (
    <div className='App'>
    <h1>passwordGenrator</h1>
       <input type='text' readOnly  
       value={password}
       
       placeholder='password'
       
       
       ></input>
       <button onClick={copyPasswordToClipboard}> copy</button>
       <div><input type='range' min={8} max={20} onChange={(e)=>{setLength(e.target.value)}}></input>
       
       <label>Length:{length}</label>
       
       
       </div>
       <div><input type='checkbox'
       
       defaultChecked={numberAllowed}
       
       id='numberInput'

       onChange={()=>{setNumberAllowed((prev)=> !prev)}}
       
       
       
       
       
       ></input>
       <label>numbers</label></div>
       <div><input type='checkbox'
        defaultChecked={charAllowed}
        
        onChange={()=>{setCharAllowed((prev)=>!prev)}}
        
        
        
        ></input>
        
        <label>charAllowed</label>
        
        </div>
    </div>
  )
}

export default App
