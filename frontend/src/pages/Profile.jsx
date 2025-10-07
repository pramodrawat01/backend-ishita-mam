import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Profile = () => {
  const [user, setUser] = useState({
    firstName :"",
    lastName : "",
    userName : ""
  })
  const u = localStorage.getItem('loggedUser')

  useEffect(()=>{
    async function getUserProfile(){
      const res = await fetch(`http://localhost:3000/user/${u}`)
      const data = await res.json();

      if(res.status === 401 || res.status === 500){
        alert('error to get profile')
        return
      }

      setUser(data.user)

    }
    getUserProfile()
  }, [])

  return (
    <div>

        <h1>welcome {user.userName}</h1>
        <p>firstName : {user.firstName}</p>
        <p>lastName : {user.lastName}</p>
    </div>
  )
}

export default Profile