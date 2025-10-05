import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [form, setForm] = useState({
    firstName : "",
    lastName :"",
    userName : "",
    password : ""
  })

  const navigate = useNavigate()

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
          "Content-Type" : "application/json"
        },

        // send form in json form (it is obj )
        body : JSON.stringify(form)
    })

    const data = res.json()


    if(res.status == 401){
        alert(data.message)
        return
    }

    if(res.status == 201){
        navigate('/profile')
    }

  }

  return (
    <div>
      <input type='text' placeholder='firstName' name="firstName" onChange={ (e) => handleChange(e)}/>
      
      <input type='text' placeholder='lsatName' name ="lastName" onChange={ (e) => handleChange(e)}/>

      <input type='text' placeholder='userName' name ="userName" onChange={ (e) => handleChange(e)}
      />
      <input type='password' placeholder='password' name="password" onChange={ (e) => handleChange(e)}/> 


      <button onClick={(e)=> submitHandler(e)}>submit</button>
    </div>
  )
}

export default Signup
