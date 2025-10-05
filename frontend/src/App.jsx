import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'


const App = () => {

  return (
    <div> 

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
    </div>
  )
}

export default App