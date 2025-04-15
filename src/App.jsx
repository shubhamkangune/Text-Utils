import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-gray-900', 'text-white');
      showAlert('Light mode has been enabled', 'success');
    }
  };


  return (
    <>
      
      {/* navbar */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText={"AboutUs"} />

      {/* alert */}
      <Alert alert={alert} />

      <Routes>
        {/* textform */}
        <Route path='/' element={

          <div className="container mx-auto my-3">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </div>
        } />  
          {/* About */}
        <Route path='/about' element={
          
          <About mode={mode} toggleMode={toggleMode} />
        } />


      </Routes>

          
    </>
  )
}

export default App;