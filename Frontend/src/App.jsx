import React from 'react'
import './App.css'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Appointment from "./Pages/Appointment"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import AboutUs from "./Pages/AboutUs"


const App = () => {
  return (
    <>
     <Router>
       <Routes>
         <Route path="/" element = {<Home/> }/>
         <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
       </Routes>
      </Router> 
    </>
  )
}

export default App
