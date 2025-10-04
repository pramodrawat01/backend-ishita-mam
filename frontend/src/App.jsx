import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({
    firstName : "",
    lastName :"",
    userName : "",
    password : ""
  })

  const handleChange = (e)=>{
    const {name, value} = e.target;

    setForm({
      ...form,
      [name] : value
     })

  }

  const submitHandler = async() =>{
    const res = await fetch('http://localhost:3000/user/addUser', {
        method : "POST",
        headers :{
          "Content-Type" : "application/josn"
        },

        // send form in json form (it is obj )
        body : JSON.stringify(form)
    })


  }

  return (
    <div>
      <input type='text' placeholder='firstName' name="firstName" onChange={ () => handleChange()}/>
      
      <input type='text' placeholder='lsatName' name ="lastName" onChange={ () => handleChange()}/>

      <input type='text' placeholder='userName' name ="userName" onChange={ () => handleChange()}
      />
      <input type='password' placeholder='password' name="password" onChange={ () => handleChange()}/> 


      <button onClick={()=> submitHandler()}>submit</button>
    </div>
  )
}

export default App
