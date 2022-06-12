
import './App.css'
import Login from './components/login/login'
import Register from './components/register/register'
import Home from './components/home/home'
import Ques from './components/question/ques'
import Student from './components/student/student'

import React from "react";
import {
  BrowserRouter as Router,Route,Routes } from "react-router-dom";
  import { useState } from 'react';


function App() {

   const [ user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
    <Routes>
       
        <Route  path='/' element={<Home/>} />
        <Route  path="/student" element={user && user?._id?<Student/>:<Login setLoginUser={setLoginUser}/>} />
        <Route  path="/login" element={<Login setLoginUser={setLoginUser}/>} />
        <Route  path="/register" element={<Register/>} />
        <Route path='/ques' element={<Ques/>} />
        <Route path='/student' element={<Student/>} />
        
    </Routes>
</Router>
      
    
    </div>
  );
}

export default App;
